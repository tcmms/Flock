import { useEffect } from 'react'

export default function BeamHero() {
  // Strip Storybook docs container constraints so hero goes full-width
  useEffect(() => {
    const el   = document.querySelector<HTMLElement>('.sbdocs-content')
    const wrap = document.querySelector<HTMLElement>('.sbdocs')
    const prevMaxWidth = el?.style.maxWidth  ?? ''
    const prevPadding  = wrap?.style.padding ?? ''
    if (el)   el.style.maxWidth  = 'none'
    if (wrap) wrap.style.padding = '0'
    return () => {
      if (el)   el.style.maxWidth  = prevMaxWidth
      if (wrap) wrap.style.padding = prevPadding
    }
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        background: '#000',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
        @keyframes bh-breathe {
          0%, 100% { opacity: 0.75; }
          50%       { opacity: 1; }
        }
        @keyframes bh-core-breathe {
          0%, 100% { opacity: 0.8; }
          50%       { opacity: 1; }
        }
        @keyframes bh-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── beam layers ── */
        .bh-bg-wash {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 90% 80% at 50% 0%,
            rgba(40, 60, 220, 0.55) 0%,
            rgba(20, 30, 140, 0.25) 40%,
            transparent 70%);
          mix-blend-mode: screen;
          animation: bh-breathe 5s ease-in-out infinite;
        }
        .bh-mid-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 45% 95% at 50% 0%,
            rgba(100, 140, 255, 0.75) 0%,
            rgba(60, 90, 230, 0.35) 35%,
            transparent 65%);
          mix-blend-mode: screen;
          filter: blur(8px);
          animation: bh-breathe 5s ease-in-out infinite 0.8s;
        }
        .bh-cone {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(160, 190, 255, 0.55) 30%,
            rgba(80, 110, 255, 0.2)   65%,
            transparent 85%);
          clip-path: polygon(50% 0%, 18% 100%, 82% 100%);
          mix-blend-mode: screen;
          animation: bh-breathe 5s ease-in-out infinite 0.3s;
        }
        .bh-core {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            #ffffff 0%,
            rgba(200, 220, 255, 0.9) 20%,
            rgba(120, 160, 255, 0.4) 55%,
            transparent 78%);
          clip-path: polygon(50% 0%, 41% 100%, 59% 100%);
          mix-blend-mode: screen;
          filter: blur(2px);
          animation: bh-core-breathe 5s ease-in-out infinite 1.2s;
        }
        .bh-sharp {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom,
            #ffffff 0%,
            rgba(240, 245, 255, 0.7) 15%,
            rgba(180, 210, 255, 0.2) 40%,
            transparent 60%);
          clip-path: polygon(50% 0%, 46% 100%, 54% 100%);
          mix-blend-mode: screen;
        }
        .bh-floor-glow {
          position: absolute; bottom: 0; left: 0; right: 0; height: 160px;
          background: radial-gradient(ellipse 70% 100% at 50% 100%,
            rgba(160, 185, 255, 0.65) 0%,
            rgba(80, 110, 240, 0.28) 40%,
            transparent 75%);
          mix-blend-mode: screen;
          filter: blur(6px);
          animation: bh-breathe 5s ease-in-out infinite 0.5s;
        }
        .bh-text {
          position: absolute;
          bottom: 72px;
          left: 0; right: 0;
          text-align: center;
          z-index: 10;
          animation: bh-fade-up 0.9s ease-out both;
        }
      `}</style>

      {/* Stacked gradient beam layers — mix-blend-mode: screen */}
      <div className="bh-bg-wash" />
      <div className="bh-mid-glow" />
      <div className="bh-cone" />
      <div className="bh-core" />
      <div className="bh-sharp" />
      <div className="bh-floor-glow" />

      {/* Text overlay */}
      <div className="bh-text">
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.32)',
            margin: '0 0 14px',
          }}
        >
          Snoonu · Merchant Portal
        </p>

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#fff',
            margin: '0 0 14px',
            textShadow: '0 0 60px rgba(100,140,255,0.5), 0 0 120px rgba(60,100,255,0.3)',
          }}
        >
          Flock <span style={{ color: '#D90217' }}>DS</span>
        </h1>

        <p
          style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.38)',
            margin: 0,
            fontWeight: 400,
          }}
        >
          Design System — single source of truth for the Merchant Portal UI
        </p>
      </div>
    </div>
  )
}
