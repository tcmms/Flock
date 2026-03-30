import { useCallback, useState } from 'react'

type Row =
  | { id: string; copyText: string; variant: 'split'; cmd: string; arg: string }
  | { id: string; copyText: string; variant: 'full'; line: string }
  | { id: string; copyText: string; variant: 'url'; label: string; url: string }

type AnnotatedRow = Row & { caption: string }

type WhereContext = 'terminal' | 'browser' | 'project'

type Section = {
  key: string
  stepNum: number
  label: string
  where: WhereContext
  intro: string
  rows: AnnotatedRow[]
  optional?: boolean
}

type Lang = 'en' | 'ru'

const WHERE_CONFIG: Record<WhereContext, { emoji: string; en: string; ru: string }> = {
  terminal: { emoji: '💻', en: 'In terminal', ru: 'В терминале' },
  browser:  { emoji: '🌐', en: 'In browser', ru: 'В браузере' },
  project:  { emoji: '📁', en: 'In your project folder', ru: 'В папке проекта' },
}

// ─── Row data — EN ───────────────────────────────────────────────────────────

const PREREQ_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'git-version', variant: 'full', line: 'git --version', copyText: 'git --version',
    caption: 'Should print a Git version. If not found — install Git first (macOS: Xcode Command Line Tools).',
  },
  {
    id: 'node-v', variant: 'full', line: 'node -v', copyText: 'node -v',
    caption: 'Expect v20.x. If missing — install Node.js 20 LTS from nodejs.org.',
  },
  {
    id: 'npm-v', variant: 'full', line: 'npm -v', copyText: 'npm -v',
    caption: 'npm ships with Node. If this fails — reinstall the Node.js LTS installer.',
  },
]

const TOKEN_BROWSER_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'token-url', variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: 'Click this link — it opens GitHub in your browser. The read:packages scope is pre-selected. Click "Generate token", then copy the token that appears.',
  },
]

const TOKEN_TERMINAL_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'token-export', variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    caption: 'Paste into your terminal. Replace ghp_YOUR_TOKEN with the token you just copied. Linux or older macOS: replace ~/.zshrc with ~/.bashrc.',
  },
  {
    id: 'token-source', variant: 'full', line: 'source ~/.zshrc', copyText: 'source ~/.zshrc',
    caption: 'Makes the token active right now — without closing and reopening the terminal.',
  },
]

const INSTALL_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'npm-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Downloads all dependencies — including @tcmms/flock-ds from GitHub Packages. No need to clone the Flock repo.',
  },
]

const AI_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'mcp-claude', variant: 'full',
    line: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    copyText: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    caption: 'Run once anywhere. Connects Claude Code to the deployed Flock Storybook — nothing to run locally. After this Claude knows every component, prop, and variant, and will use them automatically.',
  },
]

const CONTRIBUTE_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'clone', variant: 'split', cmd: 'git clone', arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Downloads the Flock DS repository to your computer.',
  },
  {
    id: 'cd-flock', variant: 'split', cmd: 'cd', arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Move into the folder you just downloaded.',
  },
  {
    id: 'flock-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Installs all dependencies. Wait until it finishes.',
  },
  {
    id: 'storybook', variant: 'full', line: 'npm run storybook', copyText: 'npm run storybook',
    caption: 'Opens Storybook at http://localhost:6006. Keep this terminal window open while you work.',
  },
]

// ─── Row data — RU ───────────────────────────────────────────────────────────

const PREREQ_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'git-version', variant: 'full', line: 'git --version', copyText: 'git --version',
    caption: 'Должна появиться версия Git. Если команда не найдена — сначала установи Git (macOS: Xcode Command Line Tools).',
  },
  {
    id: 'node-v', variant: 'full', line: 'node -v', copyText: 'node -v',
    caption: 'Ожидай v20.x. Если нет — установи Node.js 20 LTS с nodejs.org.',
  },
  {
    id: 'npm-v', variant: 'full', line: 'npm -v', copyText: 'npm -v',
    caption: 'npm идёт с Node. Если не работает — переустанови Node.js LTS.',
  },
]

const TOKEN_BROWSER_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'token-url', variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: 'Открой ссылку в браузере. Галочка read:packages уже стоит. Нажми "Generate token" и скопируй токен, который появится.',
  },
]

const TOKEN_TERMINAL_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'token-export', variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    caption: 'Вставь в терминал. Замени ghp_ВАШ_ТОКЕН на токен который только что скопировал. Linux или старый macOS: замени ~/.zshrc на ~/.bashrc.',
  },
  {
    id: 'token-source', variant: 'full', line: 'source ~/.zshrc', copyText: 'source ~/.zshrc',
    caption: 'Активирует токен прямо сейчас — без закрытия и открытия терминала.',
  },
]

const INSTALL_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'npm-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Скачивает все зависимости — включая @tcmms/flock-ds с GitHub Packages. Клонировать репозиторий Flock не нужно.',
  },
]

const AI_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'mcp-claude', variant: 'full',
    line: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    copyText: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    caption: 'Запусти один раз в любом терминале. Подключает Claude Code к задеплоенному Storybook — локально ничего запускать не нужно. После этого Claude знает все компоненты, пропсы и варианты, и использует их сам.',
  },
]

const CONTRIBUTE_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'clone', variant: 'split', cmd: 'git clone', arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Скачивает репозиторий Flock DS на твой компьютер.',
  },
  {
    id: 'cd-flock', variant: 'split', cmd: 'cd', arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Заходишь в папку которую только что скачал.',
  },
  {
    id: 'flock-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Устанавливает все зависимости. Дождись окончания.',
  },
  {
    id: 'storybook', variant: 'full', line: 'npm run storybook', copyText: 'npm run storybook',
    caption: 'Открывает Storybook по адресу http://localhost:6006. Держи это окно открытым пока работаешь.',
  },
]

// ─── Sections ────────────────────────────────────────────────────────────────

const SECTIONS_EN: Section[] = [
  {
    key: 'prereq', stepNum: 1, label: 'Check your setup', where: 'terminal',
    intro: "Run these to make sure everything is installed. They don't change anything.",
    rows: PREREQ_ROWS_EN,
  },
  {
    key: 'token-browser', stepNum: 2, label: 'Get a GitHub token', where: 'browser',
    intro: 'Flock DS lives on GitHub Packages — a private shelf. You need a personal key to download from it. Do this once.',
    rows: TOKEN_BROWSER_ROWS_EN,
  },
  {
    key: 'token-terminal', stepNum: 3, label: 'Save the token', where: 'terminal',
    intro: 'Come back to your terminal. Replace ghp_YOUR_TOKEN with the token you just copied.',
    rows: TOKEN_TERMINAL_ROWS_EN,
  },
  {
    key: 'install', stepNum: 4, label: 'Install Flock DS', where: 'project',
    intro: 'Open a terminal inside your project folder and run:',
    rows: INSTALL_ROWS_EN,
  },
  {
    key: 'ai', stepNum: 5, label: 'Connect Claude Code', where: 'terminal',
    intro: "Run this once anywhere — Claude will then know every Flock component and pick them automatically when you ask it to build UI.",
    rows: AI_ROWS_EN,
  },
  {
    key: 'contribute', stepNum: 6, label: 'Working on Flock DS itself', where: 'terminal',
    intro: 'Only if you need to add or change components in the design system. Portal developers skip this.',
    rows: CONTRIBUTE_ROWS_EN,
    optional: true,
  },
]

const SECTIONS_RU: Section[] = [
  {
    key: 'prereq', stepNum: 1, label: 'Проверь, что всё установлено', where: 'terminal',
    intro: 'Запусти эти команды — они просто выводят версии, ничего не меняют.',
    rows: PREREQ_ROWS_RU,
  },
  {
    key: 'token-browser', stepNum: 2, label: 'Получи GitHub-токен', where: 'browser',
    intro: 'Flock DS хранится на GitHub Packages. Чтобы скачать оттуда — нужен личный ключ доступа. Делается один раз.',
    rows: TOKEN_BROWSER_ROWS_RU,
  },
  {
    key: 'token-terminal', stepNum: 3, label: 'Сохрани токен', where: 'terminal',
    intro: 'Вернись в терминал. Замени ghp_ВАШ_ТОКЕН на токен который только что скопировал.',
    rows: TOKEN_TERMINAL_ROWS_RU,
  },
  {
    key: 'install', stepNum: 4, label: 'Установи Flock DS', where: 'project',
    intro: 'Открой терминал внутри папки своего проекта и запусти:',
    rows: INSTALL_ROWS_RU,
  },
  {
    key: 'ai', stepNum: 5, label: 'Подключи Claude Code', where: 'terminal',
    intro: 'Запусти один раз в любом терминале — после этого Claude знает все компоненты Flock и использует их сам.',
    rows: AI_ROWS_RU,
  },
  {
    key: 'contribute', stepNum: 6, label: 'Работа над самим Flock DS', where: 'terminal',
    intro: 'Только если нужно добавить или изменить компоненты в дизайн-системе. Разработчики портала пропускают этот шаг.',
    rows: CONTRIBUTE_ROWS_RU,
    optional: true,
  },
]

const CONTENT = {
  en: { title: 'Install Flock DS', sections: SECTIONS_EN },
  ru: { title: 'Установка Flock DS', sections: SECTIONS_RU },
}

// ─── Component ───────────────────────────────────────────────────────────────

export function QuickStartCommands() {
  const [lang, setLang] = useState<Lang>('en')
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

  const content = CONTENT[lang]

  return (
    <div className="fi-code fi-code-commands">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--flock-margin-lg)' }}>
        <h2 id="fi-quickstart-title" className="fi-code-commands-title" style={{ margin: 0 }}>
          {content.title}
        </h2>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['en', 'ru'] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                padding: '5px 10px',
                borderRadius: 8,
                border: '1px solid',
                cursor: 'pointer',
                borderColor: lang === l ? 'rgba(217,2,23,0.6)' : 'rgba(255,255,255,0.14)',
                color: lang === l ? '#ff6b7a' : 'rgba(255,255,255,0.45)',
                background: lang === l ? 'rgba(217,2,23,0.08)' : 'rgba(255,255,255,0.04)',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline steps */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {content.sections.map((section, idx) => {
          const where = WHERE_CONFIG[section.where]
          const whereLabel = lang === 'en' ? where.en : where.ru
          const optionalLabel = lang === 'en' ? 'optional' : 'опционально'
          const isLast = idx === content.sections.length - 1

          return (
            <div key={section.key} style={{ display: 'flex', gap: 14 }}>
              {/* Timeline spine */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: section.optional ? 'rgba(255,255,255,0.04)' : 'rgba(217,2,23,0.12)',
                  border: `1px solid ${section.optional ? 'rgba(255,255,255,0.1)' : 'rgba(217,2,23,0.3)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
                  color: section.optional ? 'rgba(255,255,255,0.28)' : '#ff6b7a',
                }}>
                  {section.stepNum}
                </div>
                {!isLast && (
                  <div style={{
                    width: 1, flex: 1, minHeight: 12,
                    background: 'rgba(255,255,255,0.07)',
                    margin: '3px 0',
                  }} />
                )}
              </div>

              {/* Step content */}
              <div style={{ flex: 1, paddingBottom: isLast ? 0 : 20 }}>
                {/* WHERE badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  marginBottom: 6,
                  padding: '2px 8px 2px 6px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}>
                  <span style={{ fontSize: 11, lineHeight: 1 }}>{where.emoji}</span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.4)',
                  }}>
                    {whereLabel}{section.optional ? ` — ${optionalLabel}` : ''}
                  </span>
                </div>

                {/* Step title */}
                <p style={{
                  margin: '0 0 5px',
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
                  lineHeight: 1.3, letterSpacing: '-0.015em',
                  color: section.optional ? 'rgba(255,255,255,0.42)' : 'rgba(255,255,255,0.88)',
                }}>
                  {section.label}
                </p>

                {/* Intro */}
                <p className="fi-code-caption fi-code-section-intro" style={{ marginBottom: 10 }}>
                  {section.intro}
                </p>

                {/* Commands */}
                {section.rows.map((row) => (
                  <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CodeLineWithCaption({
  row, copiedId, onCopy,
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
  if (row.variant === 'url') {
    return (
      <a
        href={row.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'rgba(255,255,255,0.55)',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(255,255,255,0.2)',
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
      >
        {row.label}
      </a>
    )
  }
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
