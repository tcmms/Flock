import { useEffect } from 'react'

const LINES = 22
const H_LINES = [32, 48, 62, 74, 84, 92]
const VP = { x: 50, y: 10 } // vanishing point in % coordinates

function PerspectiveGrid() {
  // Converging lines from bottom edge to vanishing point
  const vLines = Array.from({ length: LINES }, (_, i) => {
    const x = (i / (LINES - 1)) * 100
    return { x1: x, y1: 100, x2: VP.x, y2: VP.y }
  })

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <defs>
        {/* Fade lines from solid at bottom to transparent at top */}
        <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,80,200,0)"    />
          <stop offset="40%"  stopColor="rgba(0,80,200,0.06)" />
          <stop offset="100%" stopColor="rgba(0,80,200,0.18)" />
        </linearGradient>

        {/* Same fade but for the stroke paint — achieved via a mask */}
        <linearGradient id="maskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="0"   />
          <stop offset="35%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="1"   />
        </linearGradient>

        <mask id="fadeMask">
          <rect x="0" y="0" width="100" height="100" fill="url(#maskGrad)" />
        </mask>

        {/* Vanishing point glow */}
        <radialGradient id="vpGlow" cx="50%" cy="10%" r="25%">
          <stop offset="0%"   stopColor="rgba(80,130,255,0.3)" />
          <stop offset="100%" stopColor="rgba(80,130,255,0)"   />
        </radialGradient>

        {/* Horizon line glow at bottom */}
        <radialGradient id="horizGlow" cx="50%" cy="100%" r="50%">
          <stop offset="0%"   stopColor="rgba(60,110,255,0.35)" />
          <stop offset="100%" stopColor="rgba(60,110,255,0)"    />
        </radialGradient>
      </defs>

      {/* Vanishing point soft glow */}
      <ellipse
        cx={`${VP.x}%`} cy={`${VP.y}%`}
        rx="20%" ry="14%"
        fill="url(#vpGlow)"
      />

      {/* Horizon glow strip */}
      <rect x="0" y="70" width="100" height="30" fill="url(#horizGlow)" />

      {/* All converging + horizontal lines, masked to fade near VP */}
      <g mask="url(#fadeMask)">
        {/* Vertical converging lines */}
        {vLines.map((l, i) => (
          <line
            key={`v${i}`}
            x1={`${l.x1}%`} y1={`${l.y1}%`}
            x2={`${l.x2}%`} y2={`${l.y2}%`}
            stroke="rgba(0,70,190,0.22)"
            strokeWidth="0.25"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Horizontal cross lines — perspective-spaced (closer together near top) */}
        {H_LINES.map((y, i) => {
          // Interpolate x bounds: at y=100 they span full width; at y=VP.y they converge to VP.x
          const t = (y - VP.y) / (100 - VP.y)
          const xLeft  = VP.x - t * VP.x
          const xRight = VP.x + t * (100 - VP.x)
          return (
            <line
              key={`h${i}`}
              x1={`${xLeft}%`}  y1={`${y}%`}
              x2={`${xRight}%`} y2={`${y}%`}
              stroke="rgba(0,70,190,0.18)"
              strokeWidth="0.25"
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </g>

      {/* Horizon line */}
      <line
        x1="0%" y1="99.5%" x2="100%" y2="99.5%"
        stroke="rgba(0,80,200,0.3)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />

      {/* Vanishing point dot */}
      <circle
        cx={`${VP.x}%`} cy={`${VP.y}%`}
        r="0.5"
        fill="rgba(60,110,255,0.5)"
      />
    </svg>
  )
}

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
        height: '580px',
        background: '#ffffff',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
        @keyframes bh-grid-pulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes bh-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bh-grid-svg {
          animation: bh-grid-pulse 4s ease-in-out infinite;
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

      {/* Animated perspective grid */}
      <div className="bh-grid-svg" style={{ position: 'absolute', inset: 0 }}>
        <PerspectiveGrid />
      </div>

      {/* Text overlay */}
      <div className="bh-text">
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.38)',
            margin: '0 0 14px',
          }}
        >
          Snoonu · OPS Products
        </p>

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: '#000',
            margin: '0 0 14px',
          }}
        >
          Flock <span style={{ color: '#D90217' }}>DS</span>
        </h1>

        <p
          style={{
            fontSize: '15px',
            color: 'rgba(0,0,0,0.45)',
            margin: 0,
            fontWeight: 400,
          }}
        >
          Design System — single source of truth for the OPS Products UI
        </p>
      </div>
    </div>
  )
}
