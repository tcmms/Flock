import { useCallback, useMemo, useState } from 'react'
import { Collapse } from '../components/Collapse'
import { FlockIcons } from '../icons/flockIcons'

type Row =
  | { id: string; copyText: string; variant: 'split'; cmd: string; arg: string }
  | { id: string; copyText: string; variant: 'full'; line: string }
  | { id: string; copyText: string; variant: 'url'; label: string; url: string }

type AnnotatedRow = Row & { caption: string }

type Lang = 'en' | 'ru'

// ─── English ────────────────────────────────────────────────────────────────

const PREREQ_ROWS_EN: AnnotatedRow[] = [
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
    caption: 'Expect v20.x. If missing, install Node.js 20 LTS from nodejs.org.',
  },
  {
    id: 'npm-v',
    variant: 'full',
    line: 'npm -v',
    copyText: 'npm -v',
    caption: 'npm ships with Node. If this fails, reinstall the Node.js LTS installer.',
  },
]

const TOKEN_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'token-url',
    variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: '👆 Open this link in your browser — not in the terminal. The read:packages scope will be pre-selected. Click "Generate token", then copy the token that appears.',
  },
  {
    id: 'token-export',
    variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN' >> ~/.zshrc",
    caption: 'Paste this into the terminal. Replace ghp_YOUR_TOKEN with the token you just copied from GitHub. This saves it permanently so you never have to do this again.',
  },
  {
    id: 'token-source',
    variant: 'full',
    line: 'source ~/.zshrc',
    copyText: 'source ~/.zshrc',
    caption: 'Run this so the token takes effect in the current terminal window right now.',
  },
]

const INSTALL_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'npm-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Run this inside the Merchant Portal project folder. It will download all dependencies — including @tcmms/flock-ds from GitHub Packages.',
  },
]

const CONTRIBUTE_ROWS_EN: AnnotatedRow[] = [
  {
    id: 'clone',
    variant: 'split',
    cmd: 'git clone',
    arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Downloads the Flock DS repository to your computer.',
  },
  {
    id: 'cd-flock',
    variant: 'split',
    cmd: 'cd',
    arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Go into the folder you just downloaded.',
  },
  {
    id: 'flock-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Installs all dependencies. Wait until it finishes.',
  },
  {
    id: 'storybook',
    variant: 'full',
    line: 'npm run storybook',
    copyText: 'npm run storybook',
    caption: 'Opens Storybook at http://localhost:6006. Keep this terminal window open while you work.',
  },
]

// ─── Russian ─────────────────────────────────────────────────────────────────

const PREREQ_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'git-version',
    variant: 'full',
    line: 'git --version',
    copyText: 'git --version',
    caption: 'Должна напечататься версия Git. Если команда не найдена — сначала установи Git (macOS: Xcode Command Line Tools).',
  },
  {
    id: 'node-v',
    variant: 'full',
    line: 'node -v',
    copyText: 'node -v',
    caption: 'Ожидай v20.x. Если нет — установи Node.js 20 LTS с nodejs.org.',
  },
  {
    id: 'npm-v',
    variant: 'full',
    line: 'npm -v',
    copyText: 'npm -v',
    caption: 'npm идёт в комплекте с Node. Если не работает — переустанови Node.js LTS.',
  },
]

const TOKEN_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'token-url',
    variant: 'url',
    label: 'github.com/settings/tokens/new',
    url: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    copyText: 'https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm',
    caption: '👆 Открой эту ссылку в браузере — не в терминале. Галочка read:packages уже будет стоять. Нажми "Generate token" и скопируй токен, который появится.',
  },
  {
    id: 'token-export',
    variant: 'split',
    cmd: 'echo',
    arg: "'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    copyText: "echo 'export GITHUB_TOKEN=ghp_ВАШ_ТОКЕН' >> ~/.zshrc",
    caption: 'Вставь в терминал. Замени ghp_ВАШ_ТОКЕН на токен который ты только что скопировал. Это сохраняет его навсегда — больше делать не нужно.',
  },
  {
    id: 'token-source',
    variant: 'full',
    line: 'source ~/.zshrc',
    copyText: 'source ~/.zshrc',
    caption: 'Запусти чтобы токен сразу заработал в текущем окне терминала.',
  },
]

const INSTALL_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'npm-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Запусти внутри папки Merchant Portal. Скачает все зависимости — включая @tcmms/flock-ds с GitHub Packages. Локальная папка flock-ds не нужна.',
  },
]

const CONTRIBUTE_ROWS_RU: AnnotatedRow[] = [
  {
    id: 'clone',
    variant: 'split',
    cmd: 'git clone',
    arg: 'https://github.com/tcmms/Flock.git',
    copyText: 'git clone https://github.com/tcmms/Flock.git',
    caption: 'Скачивает репозиторий Flock DS на твой компьютер.',
  },
  {
    id: 'cd-flock',
    variant: 'split',
    cmd: 'cd',
    arg: 'Flock',
    copyText: 'cd Flock',
    caption: 'Заходишь в папку которую только что скачал.',
  },
  {
    id: 'flock-install',
    variant: 'full',
    line: 'npm install',
    copyText: 'npm install',
    caption: 'Устанавливает все зависимости. Дождись окончания.',
  },
  {
    id: 'storybook',
    variant: 'full',
    line: 'npm run storybook',
    copyText: 'npm run storybook',
    caption: 'Открывает Storybook по адресу http://localhost:6006. Держи это окно терминала открытым пока работаешь.',
  },
]

// ─── Content map ─────────────────────────────────────────────────────────────

const CONTENT = {
  en: {
    title: 'Install Flock DS',
    sections: [
      {
        key: 'before',
        label: '0. Check your setup',
        intro: "Run these in your terminal to make sure everything is installed. These commands don't change anything — they just print version numbers.",
        rows: PREREQ_ROWS_EN,
      },
      {
        key: 'token',
        label: '1. Get a GitHub token',
        intro: 'Flock DS lives on GitHub Packages — like a private shelf. To download packages from it, you need a personal key called a token. Do this once and forget about it.',
        rows: TOKEN_ROWS_EN,
      },
      {
        key: 'install',
        label: '2. Install in Merchant Portal',
        intro: (
          <>
            Open your terminal inside the Merchant Portal project folder, then run the command below.
            You do <strong style={{ color: 'rgba(255,255,255,0.72)' }}>not</strong> need to clone the Flock DS repo — it installs automatically as a package.
          </>
        ),
        rows: INSTALL_ROWS_EN,
      },
      {
        key: 'contribute',
        label: '3. Working on Flock DS itself (optional)',
        intro: 'Only do this if you need to add or change components in the design system. Portal developers skip this step.',
        rows: CONTRIBUTE_ROWS_EN,
      },
    ],
  },
  ru: {
    title: 'Установка Flock DS',
    sections: [
      {
        key: 'before',
        label: '0. Проверь, всё ли установлено',
        intro: 'Запусти эти команды в терминале — они просто выводят номера версий, ничего не меняют. Если что-то не работает — смотри подсказку.',
        rows: PREREQ_ROWS_RU,
      },
      {
        key: 'token',
        label: '1. Получи GitHub-токен',
        intro: 'Flock DS хранится на GitHub Packages — это как закрытый склад. Чтобы скачать оттуда пакеты, нужен личный ключ доступа — токен. Делается один раз, потом забываешь.',
        rows: TOKEN_ROWS_RU,
      },
      {
        key: 'install',
        label: '2. Установка в Merchant Portal',
        intro: (
          <>
            Открой терминал внутри папки Merchant Portal и запусти команду ниже.
            Клонировать репозиторий Flock DS <strong style={{ color: 'rgba(255,255,255,0.72)' }}>не нужно</strong> — он установится как обычный пакет.
          </>
        ),
        rows: INSTALL_ROWS_RU,
      },
      {
        key: 'contribute',
        label: '3. Работа над самим Flock DS (опционально)',
        intro: 'Только если тебе нужно добавить или изменить компоненты в дизайн-системе. Разработчики портала пропускают этот шаг.',
        rows: CONTRIBUTE_ROWS_RU,
      },
    ],
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

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

  const collapseItems = useMemo(
    () =>
      content.sections.map((section) => ({
        key: section.key,
        label: <span className="fi-code-collapse-label">{section.label}</span>,
        children: (
          <>
            <p className="fi-code-caption fi-code-section-intro">{section.intro}</p>
            {section.rows.map((row) => (
              <CodeLineWithCaption key={row.id} row={row} copiedId={copiedId} onCopy={copyLine} />
            ))}
          </>
        ),
      })),
    [content, copiedId, copyLine],
  )

  return (
    <div className="fi-code fi-code-commands">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--flock-margin-md)' }}>
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
                textTransform: 'uppercase',
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

// ─── Sub-components ──────────────────────────────────────────────────────────

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
