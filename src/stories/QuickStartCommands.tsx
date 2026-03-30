import { useCallback, useState } from 'react'

type Row =
  | { id: string; copyText: string; variant: 'split'; cmd: string; arg: string }
  | { id: string; copyText: string; variant: 'full'; line: string }
  | { id: string; copyText: string; variant: 'url'; label: string; url: string }

type AnnotatedRow = Row & { caption: string }

type Section = {
  key: string
  stepNum: number
  label: string
  intro: React.ReactNode
  rows: AnnotatedRow[]
  optional?: boolean
}

type Lang = 'en' | 'ru'

// ─── Row data — EN ───────────────────────────────────────────────────────────

const PREREQ_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'git-version', variant: 'full', line: 'git --version', copyText: 'git --version',
    caption: 'Should print something like "git version 2.x". If not found — install Git first.',
  },
  {
    id: 'node-v', variant: 'full', line: 'node -v', copyText: 'node -v',
    caption: 'Should print v20.x or higher. If missing — install Node.js 20 LTS from nodejs.org.',
  },
  {
    id: 'npm-v', variant: 'full', line: 'npm -v', copyText: 'npm -v',
    caption: 'npm comes with Node. If this fails — reinstall Node.js LTS.',
  },
]

const TOKEN_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'token-url', variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: 'Opens GitHub in your browser. The read:packages checkbox is pre-selected. Scroll down, click "Generate token", then copy the long string that appears.',
  },
  {
    id: 'token-export', variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    caption: 'Back in your terminal. Paste this and replace ghp_YOUR_TOKEN with what you just copied from GitHub. On Linux or older macOS use ~/.bashrc instead of ~/.zshrc.',
  },
  {
    id: 'token-source', variant: 'full', line: 'source ~/.zshrc', copyText: 'source ~/.zshrc',
    caption: 'Makes your token work right now without reopening the terminal.',
  },
]

const INSTALL_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'npm-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Run this inside your project folder. It downloads Flock DS and everything else your project needs.',
  },
  {
    id: 'mcp-claude', variant: 'full',
    line: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    copyText: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    caption: 'Run this once — anywhere, any terminal. After this Claude knows every Flock component, its props and variants, and will use them automatically when you ask it to build UI.',
  },
]

const CONTRIBUTE_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'clone', variant: 'split', cmd: 'git clone', arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Downloads the Flock DS source code to your computer.',
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
    caption: 'Должна появиться версия, например "git version 2.x". Если команда не найдена — сначала установи Git.',
  },
  {
    id: 'node-v', variant: 'full', line: 'node -v', copyText: 'node -v',
    caption: 'Должна быть v20.x или выше. Если нет — установи Node.js 20 LTS с nodejs.org.',
  },
  {
    id: 'npm-v', variant: 'full', line: 'npm -v', copyText: 'npm -v',
    caption: 'npm идёт вместе с Node. Если не работает — переустанови Node.js LTS.',
  },
]

const TOKEN_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'token-url', variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: 'Открывает GitHub в браузере. Галочка read:packages уже стоит. Проскролль вниз, нажми "Generate token" и скопируй длинную строку которая появится.',
  },
  {
    id: 'token-export', variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    caption: 'Вернись в терминал. Вставь команду и замени ghp_ВАШ_ТОКЕН на то, что только что скопировал с GitHub. На Linux или старом macOS: замени ~/.zshrc на ~/.bashrc.',
  },
  {
    id: 'token-source', variant: 'full', line: 'source ~/.zshrc', copyText: 'source ~/.zshrc',
    caption: 'Активирует токен прямо сейчас — не нужно закрывать и открывать терминал заново.',
  },
]

const INSTALL_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'npm-install', variant: 'full', line: 'npm install', copyText: 'npm install',
    caption: 'Запусти внутри папки своего проекта. Скачивает Flock DS и всё остальное что нужно проекту.',
  },
  {
    id: 'mcp-claude', variant: 'full',
    line: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    copyText: `claude mcp add-json "storybook" '{"command":"npx","args":["-y","storybook-mcp@latest"],"env":{"STORYBOOK_URL":"https://tcmms.github.io/Flock/index.json"}}'`,
    caption: 'Запусти один раз — в любом терминале, не важно где. После этого Claude знает все компоненты Flock, их пропсы и варианты, и использует их сам когда ты просишь сверстать интерфейс.',
  },
]

const CONTRIBUTE_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'clone', variant: 'split', cmd: 'git clone', arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Скачивает исходный код Flock DS на твой компьютер.',
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

const ic = (text: string) => (
  <code style={{
    fontFamily: "'SFMono-Regular', Consolas, monospace",
    fontSize: '0.9em',
    color: 'rgba(255,255,255,0.7)',
    background: 'rgba(255,255,255,0.08)',
    padding: '1px 5px',
    borderRadius: 4,
    border: '1px solid rgba(255,255,255,0.1)',
  }}>{text}</code>
)

const SECTIONS_EN: Section[] = [
  {
    key: 'prereq',
    stepNum: 1,
    label: 'Open your terminal and check the basics',
    intro: 'Run each command and make sure it prints a version number. If something is missing, install it before moving on.',
    rows: PREREQ_ROWS_EN,
  },
  {
    key: 'token',
    stepNum: 2,
    label: 'Get a key to download Flock DS',
    intro: <>Flock DS is stored on GitHub&apos;s private registry — you need a personal key (called a token) to download from it. Click the link below to open GitHub in your browser, generate the token, then come back here to your terminal and save it with the next two commands.</>,
    rows: TOKEN_ROWS_EN,
  },
  {
    key: 'install',
    stepNum: 3,
    label: 'Install Flock DS and connect Claude',
    intro: <>In your terminal, navigate into your project folder first: {ic('cd your-project-name')}. Then run {ic('npm install')} — that installs Flock DS. After that, run the second command (you can do it from any terminal window) to connect Claude Code to the design system.</>,
    rows: INSTALL_ROWS_EN,
  },
  {
    key: 'contribute',
    stepNum: 4,
    label: 'Working on Flock DS itself',
    intro: 'Skip this unless you need to add or change components in the design system. Portal developers don\'t need this.',
    rows: CONTRIBUTE_ROWS_EN,
    optional: true,
  },
]

const SECTIONS_RU: Section[] = [
  {
    key: 'prereq',
    stepNum: 1,
    label: 'Открой терминал и проверь, всё ли есть',
    intro: 'Запусти каждую команду и убедись, что она выводит номер версии. Если чего-то нет — установи перед тем как идти дальше.',
    rows: PREREQ_ROWS_RU,
  },
  {
    key: 'token',
    stepNum: 2,
    label: 'Получи ключ для скачивания Flock DS',
    intro: <>Flock DS хранится на закрытом реестре GitHub — чтобы скачивать оттуда, нужен личный ключ (токен). Нажми на ссылку ниже — откроется GitHub в браузере. Там сгенерируй токен, скопируй его, вернись сюда в терминал и сохрани двумя командами ниже.</>,
    rows: TOKEN_ROWS_RU,
  },
  {
    key: 'install',
    stepNum: 3,
    label: 'Установи Flock DS и подключи Claude',
    intro: <>В терминале перейди в папку своего проекта: {ic('cd название-папки-проекта')}. Запусти {ic('npm install')} — установит Flock DS. После этого запусти вторую команду (можно в любом окне терминала) — она подключит Claude Code к дизайн-системе.</>,
    rows: INSTALL_ROWS_RU,
  },
  {
    key: 'contribute',
    stepNum: 4,
    label: 'Работа над самим Flock DS',
    intro: 'Пропусти если просто используешь Flock DS в проекте. Это нужно только если хочешь добавлять или менять компоненты в самой дизайн-системе.',
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

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {content.sections.map((section, idx) => {
          const isLast = idx === content.sections.length - 1
          const dimmed = section.optional

          return (
            <div key={section.key} style={{ display: 'flex', gap: 14 }}>
              {/* Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: dimmed ? 'rgba(255,255,255,0.04)' : 'rgba(217,2,23,0.12)',
                  border: `1px solid ${dimmed ? 'rgba(255,255,255,0.1)' : 'rgba(217,2,23,0.3)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
                  color: dimmed ? 'rgba(255,255,255,0.25)' : '#ff6b7a',
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

              {/* Content */}
              <div style={{ flex: 1, paddingBottom: isLast ? 0 : 24 }}>
                {/* Label */}
                <p style={{
                  margin: '4px 0 8px',
                  fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600,
                  lineHeight: 1.3, letterSpacing: '-0.015em',
                  color: dimmed ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.88)',
                }}>
                  {section.label}
                  {section.optional && (
                    <span style={{
                      marginLeft: 8, fontSize: 10, fontWeight: 600,
                      letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                      color: 'rgba(255,255,255,0.25)',
                      verticalAlign: 'middle',
                    }}>
                      {lang === 'en' ? 'optional' : 'опционально'}
                    </span>
                  )}
                </p>

                {/* Intro — storytelling */}
                <p style={{
                  margin: '0 0 12px',
                  fontFamily: 'Inter, sans-serif', fontSize: 13,
                  lineHeight: 1.65, color: 'rgba(255,255,255,0.5)',
                }}>
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
