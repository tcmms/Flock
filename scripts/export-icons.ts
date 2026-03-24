import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { transform } from '@svgr/core'

const FIGMA_TOKEN = process.env.FIGMA_TOKEN
if (!FIGMA_TOKEN) {
  console.error('Missing FIGMA_TOKEN env variable. Add it to .env or export it.')
  process.exit(1)
}
const FILE_ID = 'Y762LjyY2IaJHC1jb0wRQW'
const OUTPUT_DIR = 'src/icons'

const api = axios.create({
  baseURL: 'https://api.figma.com/v1',
  headers: { 'X-Figma-Token': FIGMA_TOKEN },
})

interface FigmaNode {
  id: string
  name: string
  type: string
  children?: FigmaNode[]
}

function findComponents(node: FigmaNode, results: { id: string; name: string }[] = []) {
  if (node.type === 'COMPONENT') {
    results.push({ id: node.id, name: node.name })
  }
  if (node.children) {
    for (const child of node.children) {
      findComponents(child, results)
    }
  }
  return results
}

async function getFileComponents() {
  console.log('Fetching file tree from Figma...')
  const res = await api.get(`/files/${FILE_ID}`)
  const document = res.data.document
  return findComponents(document)
}

async function getSvgUrls(nodeIds: string[]) {
  const ids = nodeIds.join(',')
  const res = await api.get(`/images/${FILE_ID}?ids=${ids}&format=svg`)
  return res.data.images
}

function toComponentName(name: string): string {
  return name
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('') + 'Icon'
}

async function downloadSvg(url: string): Promise<string> {
  const res = await axios.get(url, { responseType: 'text' })
  return res.data
}

async function svgToReact(svg: string, componentName: string): Promise<string> {
  return await transform(
    svg,
    {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      typescript: true,
      jsxRuntime: 'automatic',
      dimensions: false,
      replaceAttrValues: {
        '#323232': 'currentColor',
        '#000': 'currentColor',
        '#000000': 'currentColor',
        'black': 'currentColor',
      },
      svgProps: {
        width: '1em',
        height: '1em',
        fill: 'currentColor',
      },
    },
    { componentName }
  )
}

async function main() {
  const components = await getFileComponents()
  console.log(`Found ${components.length} components`)

  if (components.length === 0) {
    console.log('No components found in file.')
    return
  }

  const nodeIds = components.map(c => c.id)

  // Process in batches of 100
  const batchSize = 100
  const allUrls: Record<string, string> = {}

  for (let i = 0; i < nodeIds.length; i += batchSize) {
    const batch = nodeIds.slice(i, i + batchSize)
    console.log(`Fetching SVG URLs batch ${Math.floor(i / batchSize) + 1}...`)
    const urls = await getSvgUrls(batch)
    Object.assign(allUrls, urls)
    if (i + batchSize < nodeIds.length) await new Promise(r => setTimeout(r, 500))
  }

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const exports: string[] = []
  const seen = new Set<string>()
  let count = 0

  for (const component of components) {
    const url = allUrls[component.id]
    if (!url) continue

    const componentName = toComponentName(component.name)
    if (seen.has(componentName)) continue
    seen.add(componentName)

    try {
      const svg = await downloadSvg(url)
      const reactCode = await svgToReact(svg, componentName)

      const fileName = componentName + '.tsx'
      fs.writeFileSync(path.join(OUTPUT_DIR, fileName), reactCode)
      exports.push(`export { default as ${componentName} } from './${componentName}'`)
      count++

      if (count % 50 === 0) console.log(`Processed ${count} icons...`)
    } catch (err: any) {
      console.error(`Failed: ${component.name} — ${err.message}`)
    }
  }

  // Write index.ts
  exports.sort()
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.ts'),
    exports.join('\n') + '\n'
  )

  console.log(`\nDone! Exported ${count} icons to ${OUTPUT_DIR}/`)
}

main().catch(console.error)
