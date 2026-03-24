import { useEffect } from 'react'
import LightPillar from './LightPillar'

const HERO_CHIPS = [
  'React 18',
  'TypeScript',
  'Storybook 8',
  'Ant Design 6',
  'CSS Custom Properties',
  'Inter',
] as const

export default function BeamHero() {
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
          padding: 176px var(--fi-align, 40px) 140px;
          min-height: clamp(440px, 52vh, 720px);
          box-sizing: border-box;
          overflow: hidden;
          background-color: #0c0c0d;
          isolation: isolate;
        }
        /* Pillar layer anchored right so the beam reads on the hero’s right side */
        .bh-hero-pillar {
          position: absolute;
          top: 0;
          right: -10%;
          bottom: 0;
          left: 36%;
          width: auto;
          z-index: 0;
          height: 100%;
          pointer-events: none;
          background: transparent;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 10%,
            #000 22%,
            #000 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.35) 10%,
            #000 22%,
            #000 100%
          );
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: left center;
          mask-position: left center;
        }
        .bh-hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: var(--fi-content-max, 960px);
          margin: 0 auto;
          text-align: left;
        }
        .bh-hero-title {
          margin: 0 0 12px;
          font-size: clamp(2.5rem, 6.5vw, 3.75rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: rgba(255, 255, 255, 0.96);
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
        aria-labelledby="bh-hero-title"
      >
        <div className="bh-hero-pillar" aria-hidden>
          <LightPillar
            topColor="#5C44F0"
            bottomColor="#D90217"
            intensity={0.82}
            rotationSpeed={0.3}
            glowAmount={0.0075}
            pillarWidth={4 / 3}
            pillarHeight={0.4}
            noiseIntensity={0.28}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="normal"
            quality="high"
          />
        </div>
        <div className="bh-hero-inner">
          <h1 id="bh-hero-title" className="bh-hero-title">
            Flock Design System
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
