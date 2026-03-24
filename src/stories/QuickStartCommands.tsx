import { useCallback, useState } from 'react'

type Row =
  | { id: string; copyText: string; variant: 'split'; cmd: string; arg: string }
  | { id: string; copyText: string; variant: 'full'; line: string }

const ROWS: Row[] = [
  {
    id: 'clone',
    variant: 'split',
    cmd: 'git clone',
    arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
  },
  { id: 'cd', variant: 'split', cmd: 'cd', arg: 'Flock', copyText: 'cd Flock' },
  { id: 'install', variant: 'full', line: 'npm install', copyText: 'npm install' },
  {
    id: 'storybook',
    variant: 'full',
    line: 'npm run storybook',
    copyText: 'npm run storybook',
  },
]

export function QuickStartCommands() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyLine = useCallback(async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      window.setTimeout(() => setCopiedId(null), 2000)
    } catch {
      setCopiedId(null)
    }
  }, [])

  return (
    <div className="fi-code fi-code-commands">
      <p className="fi-code-comment fi-code-commands-hint"># Download &amp; Own it</p>
      {ROWS.slice(0, 3).map((row) => (
        <div key={row.id} className="fi-code-line">
          <code className="fi-code-line-text">{renderLine(row)}</code>
          <button
            type="button"
            className="fi-code-copy"
            aria-label={`Copy: ${row.copyText}`}
            onClick={() => copyLine(row.id, row.copyText)}
          >
            {copiedId === row.id ? 'Copied' : 'Copy'}
          </button>
        </div>
      ))}
      <p className="fi-code-comment fi-code-commands-hint fi-code-commands-gap">
        # Run Storybook locally on http://localhost:6006
      </p>
      <div className="fi-code-line">
        <code className="fi-code-line-text">{renderLine(ROWS[3])}</code>
        <button
          type="button"
          className="fi-code-copy"
          aria-label={`Copy: ${ROWS[3].copyText}`}
          onClick={() => copyLine(ROWS[3].id, ROWS[3].copyText)}
        >
          {copiedId === ROWS[3].id ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

function renderLine(row: Row) {
  if (row.variant === 'full') {
    return <span className="fi-code-cmd">{row.line}</span>
  }
  return (
    <>
      <span className="fi-code-cmd">{row.cmd}</span>
      <span className="fi-code-path"> {row.arg}</span>
    </>
  )
}
