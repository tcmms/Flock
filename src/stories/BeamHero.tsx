import { useEffect, useMemo, type ComponentProps } from 'react'
import { BRAND_SNOONU_LOGO_WORDMARK_URL } from '../constants/brandAssets'
import { Hyperspeed, hyperspeedPresets } from './Hyperspeed'
import TextType from './TextType/TextType'

const HERO_TYPE_TEXTS = ['Next-Gen Design. Welcome', 'Flock Design System'] as const

const HERO_CHIPS = [
  'React 18',
  'TypeScript',
  'Storybook 8',
  'Ant Design 6',
  'CSS Custom Properties',
  'Inter',
] as const

export default function BeamHero() {
  const hyperspeedEffectOptions = useMemo(
    () => ({
      ...hyperspeedPresets.two,
      colors: {
        ...hyperspeedPresets.two.colors,
        leftCars: [0xd90217, 0xeb383e, 0xff102a],
        rightCars: [0x8f97e4, 0x5c44f0, 0xbebae3],
        sticks: 0x8f97e4,
      },
    }),
    [],
  )

  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.sbdocs-content')
    const wrap = document.querySelector<HTMLElement>('.sbdocs')
    const prevMaxWidth = el?.style.maxWidth ?? ''
    const prevOverflow = el?.style.overflow ?? ''
    const prevOverflowY = el?.style.overflowY ?? ''
    const prevPadding = wrap?.style.padding ?? ''
    const prevWrapOverflow = wrap?.style.overflow ?? ''
    const prevWrapOverflowY = wrap?.style.overflowY ?? ''
    const prevElBg = el?.style.backgroundColor ?? ''
    const prevElColor = el?.style.color ?? ''
    const prevWrapBg = wrap?.style.backgroundColor ?? ''
    const prevWrapColor = wrap?.style.color ?? ''
    const wrapper = document.querySelector<HTMLElement>('.sbdocs-wrapper')
    const prevWrapperBg = wrapper?.style.backgroundColor ?? ''
    const introBg = '#0c0c0d'
    const introFg = 'rgba(255, 255, 255, 0.88)'
    if (el) {
      el.style.maxWidth = 'none'
      el.style.overflow = 'visible'
      el.style.overflowY = 'visible'
      el.style.backgroundColor = introBg
      el.style.color = introFg
    }
    if (wrap) {
      wrap.style.padding = '0'
      wrap.style.overflow = 'visible'
      wrap.style.overflowY = 'visible'
      wrap.style.backgroundColor = introBg
      wrap.style.color = introFg
    }
    if (wrapper) {
      wrapper.style.backgroundColor = introBg
    }
    return () => {
      if (el) {
        el.style.maxWidth = prevMaxWidth
        el.style.overflow = prevOverflow
        el.style.overflowY = prevOverflowY
        el.style.backgroundColor = prevElBg
        el.style.color = prevElColor
      }
      if (wrap) {
        wrap.style.padding = prevPadding
        wrap.style.overflow = prevWrapOverflow
        wrap.style.overflowY = prevWrapOverflowY
        wrap.style.backgroundColor = prevWrapBg
        wrap.style.color = prevWrapColor
      }
      if (wrapper) {
        wrapper.style.backgroundColor = prevWrapperBg
      }
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#0c0c0d',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
        /* Same column as Introduction: --fi-content-max / --fi-align from MDX :root */
        .bh-hero-white {
          position: relative;
          flex: 0 0 auto;
          padding: calc(2 * var(--flock-padding-md)) var(--fi-align, 40px) 140px;
          min-height: clamp(440px, 52vh, 720px);
          box-sizing: border-box;
          overflow: hidden;
          background-color: #0c0c0d;
          isolation: isolate;
        }
        /* Hyperspeed layer: centered column, soft fade on both sides */
        .bh-hero-pillar {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          right: auto;
          width: min(92%, 1120px);
          max-width: 100%;
          height: 100%;
          transform: translateX(-50%);
          z-index: 0;
          pointer-events: none;
          background: transparent;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 8%,
            #000 20%,
            #000 80%,
            rgba(0, 0, 0, 0.35) 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 8%,
            #000 20%,
            #000 80%,
            rgba(0, 0, 0, 0.35) 92%,
            transparent 100%
          );
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
        }
        .bh-hero-brand-shell {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: var(--fi-content-max, 960px);
          margin: 0 auto;
          margin-bottom: calc(3 * var(--flock-margin-3xl));
          line-height: 0;
        }
        .bh-hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: var(--fi-content-max, 960px);
          margin: 0 auto;
          text-align: left;
        }
        .bh-hero-brand {
          margin: 0;
          line-height: 0;
        }
        .bh-hero-logo {
          display: block;
          width: 99px;
          height: 20px;
          object-fit: contain;
        }
        /*
          Docs + Ant Design global typography often wins over a plain .bh-hero-title rule.
          Scope + !important keeps the display headline size inside MDX.
        */
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title,
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title .bh-hero-type-live,
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title .text-type,
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title .text-type__content {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(2.65rem, 7vw, 4rem) !important;
          font-weight: 800 !important;
          line-height: 1.08 !important;
          letter-spacing: -0.04em !important;
          color: rgba(255, 255, 255, 0.96) !important;
        }
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title {
          margin: 0 0 12px;
        }
        .bh-hero-type-live {
          display: block;
        }
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title .text-type {
          display: inline !important;
          white-space: normal !important;
          vertical-align: baseline;
        }
        section.bh-hero-white[data-flock-beam-hero] h1.bh-hero-title .bh-hero-type-cursor {
          color: var(--flock-color-primary) !important;
          font-weight: 600 !important;
          font-size: inherit !important;
          font-family: inherit !important;
        }
        .bh-hero-lede {
          margin: 0;
          max-width: 38em;
          text-align: left;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.62;
          color: rgba(255, 255, 255, 0.58);
        }
        .bh-hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: flex-start;
          margin-top: 22px;
        }
        .bh-hero-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.65);
          background: rgba(255, 255, 255, 0.06);
          box-sizing: border-box;
        }
      `}</style>

      <section
        className="bh-hero-white"
        data-flock-beam-hero=""
        aria-labelledby="bh-hero-title"
      >
        <div className="bh-hero-pillar" aria-hidden>
          <Hyperspeed
            effectOptions={
              hyperspeedEffectOptions as unknown as NonNullable<
                ComponentProps<typeof Hyperspeed>['effectOptions']
              >
            }
          />
        </div>
        <div className="bh-hero-brand-shell">
          <div className="bh-hero-brand">
            <img
              className="bh-hero-logo"
              src={BRAND_SNOONU_LOGO_WORDMARK_URL}
              width={99}
              height={20}
              alt="Snoonu"
            />
          </div>
        </div>
        <div className="bh-hero-inner">
          <h1 id="bh-hero-title" className="bh-hero-title">
            <span className="bh-hero-type-live" aria-live="polite" aria-atomic="true">
              <TextType
                className="bh-hero-text-type"
                text={[...HERO_TYPE_TEXTS]}
                loop
                typingSpeed={45}
                pauseDuration={2400}
                deletingSpeed={28}
                initialDelay={400}
                cursorCharacter="|"
                cursorClassName="bh-hero-type-cursor"
              />
            </span>
          </h1>

          <p className="bh-hero-lede">
            Single source of truth for the OPS Products UI
          </p>

          <div className="bh-hero-chips" aria-label="Tech stack">
            {HERO_CHIPS.map((label) => (
              <span key={label} className="bh-hero-chip">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
