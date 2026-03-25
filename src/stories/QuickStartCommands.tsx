import { useCallback, useMemo, useState } from 'react'
import { Collapse } from '../components/Collapse'
import { FlockIcons } from '../icons/flockIcons'

type Row =
  | { id: string; copyText: string; variant: 'split'; cmd: string; arg: string }
  | { id: string; copyText: string; variant: 'full'; line: string }

type AnnotatedRow = Row & { caption: string }

const PREREQ_ROWS: AnnotatedRow[] = [
  {
    id: 'git-version',
    variant: 'full',
    line: 'git --version',
    copyText: 'git --version',
    caption: 'Should print a Git version. If the command is not found, install Git first (macOS: Xcode Command Line Tools).',
  },
  {
    id: 'node-v',
    variant: 'full',
    line: 'node -v',
    copyText: 'node -v',
    caption: 'Expect v20.x (same major version as our CI). If missing, install Node.js 20 LTS from nodejs.org.',
  },
  {
    id: 'npm-v',
    variant: 'full',
    line: 'npm -v',
    copyText: 'npm -v',
    caption: 'npm ships with Node. If this fails while node -v works, reinstall the Node.js LTS installer.',
  },
  {
    id: 'npm-ping',
    variant: 'full',
    line: 'npm ping',
    copyText: 'npm ping',
    caption: 'Checks connectivity to the npm registry. Corporate VPN or proxy may block this even when GitHub works.',
  },
]

const DOWNLOAD_ROWS: AnnotatedRow[] = [
  {
    id: 'clone',
    variant: 'split',
    cmd: 'git clone',
    arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Downloads the repo into a Flock folder in your current terminal directory. Public URL — no GitHub login required.',
  },
  {
    id: 'cd',
    variant: 'split',
    cmd: 'cd',
    arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Move into the project folder before installing dependencies.',
  },
  {
    id: 'install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Installs packages. Wait until it finishes; fix any errors (often Node version or network) before continuing.',
  },
]

const STORYBOOK_ROW: AnnotatedRow = {
  id: 'storybook',
  variant: 'full',
  line: 'npm run storybook',
  copyText: 'npm run storybook',
  caption:
    'Starts Storybook locally. Default URL is http://localhost:6006 — if that port is busy, open the Local URL printed in the terminal. Leave this window open while you use Storybook.',
}

const COLLAPSE_KEYS = ['before', 'clone', 'storybook'] as const

/** Chevron down from Flock icons; rotate 180° when panel is open = chevron up (same stroke as collapsed). */
function QuickStartCollapseExpandIcon({ isActive }: { isActive?: boolean }) {
  return (
    <span
      className={`fi-code-collapse-chevron${isActive ? ' fi-code-collapse-chevron--expanded' : ''}`}
      aria-hidden
    >
      <FlockIcons.ArrowDown />
    </span>
  )
}

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

  const collapseItems = useMemo(
    () => [
      {
        key: COLLAPSE_KEYS[0],
        label: <span className="fi-code-collapse-label">0. Before you start</span>,
        children: (
          <>
            <p className="fi-code-caption fi-code-section-intro">
              These commands only check your setup — they do not install Git or Node. If something is missing, install Git
              and Node.js 20 LTS (includes npm) first, then run the checks below.
            </p>
            {PREREQ_ROWS.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      },
      {
        key: COLLAPSE_KEYS[1],
        label: <span className="fi-code-collapse-label">1. Clone &amp; install</span>,
        children: (
          <>
            {DOWNLOAD_ROWS.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      },
      {
        key: COLLAPSE_KEYS[2],
        label: <span className="fi-code-collapse-label">2. Run Storybook</span>,
        children: <CodeLineWithCaption row={STORYBOOK_ROW} copiedId={copiedId} onCopy={copyLine} />,
      },
    ],
    [copiedId, copyLine],
  )

  return (
    <div className="fi-code fi-code-commands">
      <h2 id="fi-quickstart-title" className="fi-code-commands-title">
        Download Flock DS &amp; Own it
      </h2>
      <Collapse
        className="fi-code-collapse"
        bordered={false}
        defaultActiveKey={[COLLAPSE_KEYS[0]]}
        expandIcon={({ isActive }) => <QuickStartCollapseExpandIcon isActive={isActive} />}
        expandIconPosition="end"
        items={collapseItems}
      />
    </div>
  )
}

function CodeLineWithCaption({
  row,
  copiedId,
  onCopy,
}: {
  row: AnnotatedRow
  copiedId: string | null
  onCopy: (id: string, text: string) => void
}) {
  return (
    <div className="fi-code-line-with-caption">
      <div className="fi-code-line">
        <code className="fi-code-line-text">{renderLine(row)}</code>
        <button
          type="button"
          className="fi-code-copy"
          aria-label={`Copy: ${row.copyText}`}
          onClick={() => onCopy(row.id, row.copyText)}
        >
          {copiedId === row.id ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="fi-code-caption">{row.caption}</p>
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
