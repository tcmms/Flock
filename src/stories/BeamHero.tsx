import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { SpotLight, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Glow disc at the floor — canvas-generated radial gradient texture
function FloorSplash() {
  const meshRef = useRef<THREE.Mesh>(null)

  const tex = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = c.height = 512
    const g = c.getContext('2d')!
    const r = g.createRadialGradient(256, 256, 0, 256, 256, 256)
    r.addColorStop(0,   'rgba(200, 220, 255, 0.85)')
    r.addColorStop(0.2, 'rgba(120, 160, 255, 0.55)')
    r.addColorStop(0.5, 'rgba(50,  90,  220, 0.2)')
    r.addColorStop(1,   'rgba(0,   0,   0,   0)')
    g.fillStyle = r
    g.fillRect(0, 0, 512, 512)
    return new THREE.CanvasTexture(c)
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const mat = meshRef.current.material as THREE.MeshBasicMaterial
    mat.opacity = 0.7 + Math.sin(clock.getElapsedTime() * 0.8) * 0.3
  })

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.95, 0]}
    >
      <circleGeometry args={[7, 64]} />
      <meshBasicMaterial
        map={tex}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function BeamScene() {
  const primaryRef = useRef<THREE.SpotLight>(null)
  const { scene } = useThree()

  // All targets point down to the floor
  useEffect(() => {
    const lights: Array<React.RefObject<THREE.SpotLight | null>> = [primaryRef]
    lights.forEach(ref => {
      if (!ref.current) return
      ref.current.target.position.set(0, -3, 0)
      scene.add(ref.current.target)
    })
    return () => {
      lights.forEach(ref => {
        if (ref.current) scene.remove(ref.current.target)
      })
    }
  }, [scene])

  // Breathing pulse on the main beam intensity
  useFrame(({ clock }) => {
    if (!primaryRef.current) return
    const t = clock.getElapsedTime()
    primaryRef.current.intensity = 7 + Math.sin(t * 0.6) * 1.2
  })

  return (
    <>
      <ambientLight intensity={0.01} color="#0a0a20" />

      {/* Wide ambient blue-violet wash — fills the background cone */}
      <SpotLight
        position={[0, 7, 0]}
        color="#2233bb"
        angle={Math.PI / 3}
        distance={16}
        attenuation={10}
        anglePower={2}
        opacity={0.28}
        intensity={3}
        volumetric
        castShadow={false}
      />

      {/* Main thick beam — blue, wide cone */}
      <SpotLight
        ref={primaryRef}
        position={[0, 7, 0]}
        color="#88aaff"
        angle={Math.PI / 8}
        distance={14}
        attenuation={3.5}
        anglePower={6}
        opacity={0.7}
        intensity={7}
        volumetric
        castShadow={false}
      />

      {/* Bright white core — narrow, blazing */}
      <SpotLight
        position={[0, 7, 0]}
        color="#ffffff"
        angle={Math.PI / 24}
        distance={12}
        attenuation={2}
        anglePower={14}
        opacity={0.9}
        intensity={5}
        volumetric
        castShadow={false}
      />

      {/* Particles drifting inside the descending beam */}
      <Sparkles
        count={120}
        scale={[2, 10, 2]}
        size={2}
        speed={0.2}
        color="#aabbff"
        position={[0, 2, 0]}
        noise={0.4}
      />

      {/* Dark base floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#020208" roughness={1} metalness={0} />
      </mesh>

      {/* Glow splash disc on the floor */}
      <FloorSplash />
    </>
  )
}

export default function BeamHero() {
  // Strip Storybook's docs container constraints so hero goes full-width
  useEffect(() => {
    const el   = document.querySelector<HTMLElement>('.sbdocs-content')
    const wrap = document.querySelector<HTMLElement>('.sbdocs')
    const prevMaxWidth = el?.style.maxWidth   ?? ''
    const prevPadding  = wrap?.style.padding  ?? ''
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
        background: '#020208',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 10], fov: 62 }}
        style={{ position: 'absolute', inset: 0 }}
        gl={{ antialias: true, alpha: false, toneMappingExposure: 2.8 }}
        dpr={[1, 1.5]}
      >
        <BeamScene />
      </Canvas>

      {/* Text overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '72px',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 10,
          animation: 'fi-fade-up 0.9s ease-out both',
        }}
      >
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

      <style>{`
        @keyframes fi-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
