import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon, iconMap } from './Icon'

/**
 * Icon — renders icons from the Flock icon library (exported from Figma).
 * Browse all 3864 icons in the Gallery story.
 */
const meta: Meta<typeof Icon> = {
  title: 'General/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Icon export name' },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 }, description: 'Icon size in px' },
    color: { control: 'color', description: 'Icon color' },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

// ─── Default ───────────────────────────────────────────────
const firstIconName = Object.keys(iconMap)[0] || ''

export const Default: Story = {
  args: {
    name: firstIconName,
    size: 24,
    color: 'currentColor',
  },
}

// ─── Gallery ───────────────────────────────────────────────
function extractCategory(name: string): string {
  const match = name.match(/^([A-Z][a-z]+)/)
  return match ? match[1] : 'Other'
}

function IconGallery({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  const [search, setSearch] = useState('')
  const allNames = useMemo(() => Object.keys(iconMap).sort(), [])

  const filtered = useMemo(() => {
    if (!search) return allNames
    const q = search.toLowerCase()
    return allNames.filter(n => n.toLowerCase().includes(q))
  }, [allNames, search])

  const grouped = useMemo(() => {
    const groups: Record<string, string[]> = {}
    for (const name of filtered) {
      const cat = extractCategory(name)
      if (!groups[cat]) groups[cat] = []
      groups[cat].push(name)
    }
    return groups
  }, [filtered])

  const categories = Object.keys(grouped).sort()

  return (
    <div style={{ fontFamily: 'var(--flock-font-family)' }}>
      {/* Search */}
      <div style={{ marginBottom: 'var(--flock-space-6)', position: 'sticky', top: 0, background: 'var(--flock-color-bg-layout)', padding: 'var(--flock-padding-sm) 0', zIndex: 1 }}>
        <input
          type="text"
          placeholder={`Search ${allNames.length} icons…`}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: 'var(--flock-padding-xs) var(--flock-padding-sm)',
            fontSize: 'var(--flock-font-size-base)',
            fontFamily: 'var(--flock-font-family)',
            border: 'var(--flock-line-width) solid var(--flock-color-border)',
            borderRadius: 'var(--flock-radius-base)',
            outline: 'none',
            background: 'var(--flock-color-bg-container)',
          }}
        />
        <div style={{ fontSize: 'var(--flock-font-size-sm)', color: 'var(--flock-color-text-tertiary)', marginTop: 'var(--flock-space-1)' }}>
          {filtered.length} of {allNames.length} icons
        </div>
      </div>

      {/* Categories */}
      {categories.map(cat => (
        <div key={cat} style={{ marginBottom: 'var(--flock-space-8)' }}>
          <h3 style={{
            fontSize: 'var(--flock-font-size-sm)',
            color: 'var(--flock-color-text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 'var(--flock-space-3)',
          }}>
            {cat} ({grouped[cat].length})
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(size * 3, 80)}px, 1fr))`,
            gap: 'var(--flock-space-2)',
          }}>
            {grouped[cat].map(name => (
              <div
                key={name}
                title={name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--flock-space-1)',
                  padding: 'var(--flock-padding-xs)',
                  borderRadius: 'var(--flock-radius-base)',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--flock-color-bg-text-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                onClick={() => navigator.clipboard?.writeText(name)}
              >
                <Icon name={name} size={size} color={color} />
                <span style={{
                  fontSize: '10px',
                  color: 'var(--flock-color-text-tertiary)',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                  lineHeight: 1.2,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}>
                  {name.replace(/Icon$/, '')}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const Gallery: Story = {
  render: () => <IconGallery size={24} />,
  parameters: {
    controls: { disable: true },
  },
}
