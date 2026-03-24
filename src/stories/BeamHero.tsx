import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { SpotLight, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function BeamScene() {
  const primaryRef = useRef<THREE.SpotLight>(null)
  const secondaryRef = useRef<THREE.SpotLight>(null)
  const { scene } = useThree()

  // Ensure spotlight targets are in the scene so they point upward correctly
  useEffect(() => {
    const addTarget = (ref: React.RefObject<THREE.SpotLight | null>, targetY: number) => {
      if (!ref.current) return
      ref.current.target.position.set(0, targetY, 0)
      scene.add(ref.current.target)
    }
    addTarget(primaryRef, 8)
    addTarget(secondaryRef, 8)
    return () => {
      if (primaryRef.current) scene.remove(primaryRef.current.target)
      if (secondaryRef.current) scene.remove(secondaryRef.current.target)
    }
  }, [scene])

  // Gentle breathing pulse on the main beam
  useFrame(({ clock }) => {
    if (!primaryRef.current) return
    const t = clock.getElapsedTime()
    primaryRef.current.intensity = 3.5 + Math.sin(t * 0.7) * 0.8
  })

  return (
    <>
      <ambientLight intensity={0.015} color="#1a1a3a" />

      {/* Wide violet ambient wash — fills the background */}
      <SpotLight
        ref={secondaryRef}
        position={[0, -3, 0]}
        color="#5520cc"
        angle={Math.PI / 4}
        distance={14}
        attenuation={9}
        anglePower={2.5}
        opacity={0.18}
        intensity={1.5}
        volumetric
        castShadow={false}
      />

      {/* Main blue beam — sharp bright core */}
      <SpotLight
        ref={primaryRef}
        position={[0, -3, 0]}
        color="#2255ff"
        angle={Math.PI / 9}
        distance={13}
        attenuation={4.5}
        anglePower={7}
        opacity={0.45}
        intensity={3.5}
        volumetric
        castShadow={false}
      />

      {/* Bright inner core — near-white center line */}
      <SpotLight
        position={[0, -3, 0]}
        color="#aabbff"
        angle={Math.PI / 22}
        distance={11}
        attenuation={3}
        anglePower={12}
        opacity={0.55}
        intensity={2}
        volumetric
        castShadow={false}
      />

      {/* Floating particles inside the beam */}
      <Sparkles
        count={90}
        scale={[1.6, 8, 1.6]}
        size={1.4}
        speed={0.25}
        color="#99aaff"
        position={[0, 0.5, 0]}
        noise={0.3}
      />

      {/* Dark reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#03030f" roughness={0.9} metalness={0.05} />
      </mesh>
    </>
  )
}

export default function BeamHero() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '560px',
        background: '#03030f',
        overflow: 'hidden',
        margin: '-16px -16px 0',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Three.js canvas — full bleed behind text */}
      <Canvas
        camera={{ position: [0, 0.5, 8], fov: 52 }}
        style={{ position: 'absolute', inset: 0 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
      >
        <BeamScene />
      </Canvas>

      {/* Text overlay — fades up on mount */}
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
            textShadow: '0 0 40px rgba(60,100,255,0.4)',
          }}
        >
          Flock{' '}
          <span style={{ color: '#D90217' }}>DS</span>
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
