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
]

const TOKEN_ROWS: AnnotatedRow[] = [
  {
    id: 'token-url',
    variant: 'split',
    cmd: 'open',
    arg: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: 'Opens GitHub token page with read:packages scope pre-selected. Generate the token and copy it.',
  },
  {
    id: 'token-export',
    variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    caption: 'Replace ghp_YOUR_TOKEN with the token you just copied. This saves it permanently — no need to repeat next time.',
  },
  {
    id: 'token-source',
    variant: 'full',
    line: 'source ~/.zshrc',
    copyText: 'source ~/.zshrc',
    caption: 'Applies the token to your current terminal session immediately.',
  },
]

const INSTALL_ROWS: AnnotatedRow[] = [
  {
    id: 'cd-portal',
    variant: 'split',
    cmd: 'cd',
    arg: 'Merchant\\ Portal',
    copyText: 'cd Merchant\\ Portal',
    caption: 'Navigate to the Merchant Portal project folder.',
  },
  {
    id: 'npm-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Downloads all dependencies including @tcmms/flock-ds from GitHub Packages. No need to clone flock-ds separately.',
  },
]

const CONTRIBUTE_ROWS: AnnotatedRow[] = [
  {
    id: 'clone',
    variant: 'split',
    cmd: 'git clone',
    arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Clone the Flock DS repository. Only needed if you are contributing to the design system itself.',
  },
  {
    id: 'cd-flock',
    variant: 'split',
    cmd: 'cd',
    arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Move into the project folder.',
  },
  {
    id: 'flock-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Installs all dependencies.',
  },
  {
    id: 'storybook',
    variant: 'full',
    line: 'npm run storybook',
    copyText: 'npm run storybook',
    caption: 'Starts Storybook locally at http://localhost:6006. Leave this window open while you work on components.',
  },
]

const COLLAPSE_KEYS = ['before', 'token', 'install', 'contribute'] as const

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
        label: <span className="fi-code-collapse-label">1. Get GitHub access token</span>,
        children: (
          <>
            <p className="fi-code-caption fi-code-section-intro">
              Flock DS is distributed via GitHub Packages. You need a personal access token with{' '}
              <strong style={{ color: 'rgba(255,255,255,0.72)' }}>read:packages</strong> scope to install it.
              Do this once — it works for all future projects.
            </p>
            {TOKEN_ROWS.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      },
      {
        key: COLLAPSE_KEYS[2],
        label: <span className="fi-code-collapse-label">2. Install in Merchant Portal</span>,
        children: (
          <>
            <p className="fi-code-caption fi-code-section-intro">
              Flock DS ships as <strong style={{ color: 'rgba(255,255,255,0.72)' }}>@tcmms/flock-ds</strong>.
              You don&apos;t need to clone this repo — just install it as a package.
            </p>
            {INSTALL_ROWS.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      },
      {
        key: COLLAPSE_KEYS[3],
        label: <span className="fi-code-collapse-label">3. Contributing to Flock DS (optional)</span>,
        children: (
          <>
            <p className="fi-code-caption fi-code-section-intro">
              Only needed if you are working on the design system itself — adding or modifying components.
              After pushing to main, the new version is published automatically and Storybook is redeployed.
            </p>
            {CONTRIBUTE_ROWS.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      },
    ],
    [copiedId, copyLine],
  )

  return (
    <div className="fi-code fi-code-commands">
      <h2 id="fi-quickstart-title" className="fi-code-commands-title">
        Install Flock DS
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
