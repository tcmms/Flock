import { useEffect, useRef, useState } from 'react'

const LABEL =
  'Screen recording: Snoonu Merchant Orders Management — example UI built with Flock in about 20 minutes'

/** Relative to preview iframe URL so GitHub Pages (/repo/iframe.html) resolves correctly. */
const MOV_PATH = 'introduction/dwa-interface-demo.mov'

export function DesignWithAIDemoVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const blobUrlRef = useRef<string | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.loop = true
    el.muted = true

    const restart = () => {
      el.currentTime = 0
      el.play().catch(() => {})
    }

    const onEnded = () => restart()
    el.addEventListener('ended', onEnded)

    let cancelled = false
    const ac = new AbortController()

    ;(async () => {
      try {
        const res = await fetch(MOV_PATH, { signal: ac.signal, cache: 'force-cache' })
        if (!res.ok || cancelled) return
        const blob = await res.blob()
        if (cancelled) return
        const prev = blobUrlRef.current
        if (prev) URL.revokeObjectURL(prev)
        const url = URL.createObjectURL(blob)
        blobUrlRef.current = url
        el.src = url
        el.load()
        setIsReady(true)
        el.play().catch(() => {})
      } catch {
        if (cancelled) return
        el.src = MOV_PATH
        el.load()
        setIsReady(true)
        el.play().catch(() => {})
      }
    })()

    return () => {
      cancelled = true
      ac.abort()
      el.removeEventListener('ended', onEnded)
      const u = blobUrlRef.current
      if (u) {
        URL.revokeObjectURL(u)
        blobUrlRef.current = null
      }
    }
  }, [])

  return (
    <video
      ref={ref}
      className={`fi-dwa-tip-media${isReady ? ' fi-dwa-tip-media--ready' : ''}`}
      controls
      playsInline
      muted
      loop
      autoPlay
      preload="auto"
      aria-label={LABEL}
    />
  )
}
