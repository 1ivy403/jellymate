'use client'

import { useEffect, useRef } from 'react'

type Mood = 'calm' | 'curious' | 'focus' | 'sleepy' | 'happy' | 'poked'

const moodVars: Record<Mood, { hi: string; mid: string; lo: string; aura: string; auraC: string }> = {
  calm:    { hi: '#bdeef5', mid: '#7fd8e8', lo: '#4a9fc4', aura: '34px', auraC: 'rgba(127,216,232,.5)' },
  curious: { hi: '#bdeef5', mid: '#7fd8e8', lo: '#4a9fc4', aura: '44px', auraC: 'rgba(127,216,232,.65)' },
  focus:   { hi: '#fff0c4', mid: '#ffd980', lo: '#d49a3a', aura: '60px', auraC: 'rgba(255,217,128,.7)' },
  sleepy:  { hi: '#d6d0ee', mid: '#9a8fd0', lo: '#5d5290', aura: '24px', auraC: 'rgba(154,143,208,.4)' },
  happy:   { hi: '#ffd6e6', mid: '#ff9ec4', lo: '#d4537e', aura: '70px', auraC: 'rgba(255,158,196,.75)' },
  poked:   { hi: '#ffe0c4', mid: '#ffb060', lo: '#d46010', aura: '55px', auraC: 'rgba(255,165,80,.72)' },
}

interface JellyProps {
  mood?: Mood
  size?: number   // bell width in px, default 140
  className?: string
}

export default function Jellyfish({ mood = 'calm', size = 140, className = '' }: JellyProps) {
  const bellRef = useRef<HTMLDivElement>(null)
  const v = moodVars[mood]
  const scale = size / 140

  useEffect(() => {
    if (!bellRef.current) return
    const el = bellRef.current
    el.style.setProperty('--bell-hi',  v.hi)
    el.style.setProperty('--bell-mid', v.mid)
    el.style.setProperty('--bell-lo',  v.lo)
    el.style.setProperty('--aura',     v.aura)
    el.style.setProperty('--aura-c',   v.auraC)
  }, [mood, v])

  const W = size
  const H = Math.round(size * 2.14) // maintain original 140/300 ratio

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: W, height: H }}
    >
      <div style={{ width: '100%', height: '100%', animation: 'float 6s ease-in-out infinite' }}>
        {/* Bell */}
        <div
          ref={bellRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: Math.round(40 * scale),
            transform: 'translateX(-50%)',
            width: W,
            height: Math.round(120 * scale),
            background: `radial-gradient(ellipse at 50% 35%, var(--bell-hi,${v.hi}) 0%, var(--bell-mid,${v.mid}) 45%, var(--bell-lo,${v.lo}) 100%)`,
            borderRadius: '50% 50% 44% 44% / 62% 62% 38% 38%',
            opacity: 0.92,
            boxShadow: `0 0 var(--aura,${v.aura}) var(--aura-c,${v.auraC})`,
            animation: 'pulse 6s ease-in-out infinite',
            transition: 'background 1.6s cubic-bezier(.16,1,.3,1), box-shadow 1.6s cubic-bezier(.16,1,.3,1)',
          }}
        >
          {/* Highlight */}
          <div style={{
            position: 'absolute', left: '50%', top: Math.round(24 * scale),
            transform: 'translateX(-50%)',
            width: Math.round(80 * scale), height: Math.round(58 * scale),
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,.4), transparent 70%)',
          }} />
        </div>

        {/* Eyes */}
        <div style={{
          position: 'absolute', left: '50%',
          top: Math.round(86 * scale),
          transform: 'translateX(-50%)',
          display: 'flex', gap: Math.round(26 * scale),
        }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: Math.round(11 * scale), height: Math.round(14 * scale),
              background: '#0a1228', borderRadius: '50%',
              animation: `blink 5.5s infinite ${i * 0.15}s`,
            }} />
          ))}
        </div>

        {/* Cheeks */}
        <div style={{
          position: 'absolute', left: '50%',
          top: Math.round(104 * scale),
          transform: 'translateX(-50%)',
          display: 'flex', gap: Math.round(62 * scale),
        }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              width: Math.round(15 * scale), height: Math.round(9 * scale),
              background: 'rgba(255,150,170,.5)', borderRadius: '50%',
            }} />
          ))}
        </div>

        {/* Tentacles */}
        <div style={{
          position: 'absolute', left: '50%',
          top: Math.round(150 * scale),
          transform: 'translateX(-50%)',
          width: Math.round(130 * scale), height: Math.round(130 * scale),
        }}>
          {[
            { l: 14, h: 96,  d: 0 },
            { l: 38, h: 118, d: 0.4 },
            { l: 62, h: 104, d: 0.8 },
            { l: 86, h: 120, d: 1.2 },
            { l: 110, h: 92, d: 1.6 },
          ].map((t, i) => (
            <div key={i} style={{
              position: 'absolute', top: 0,
              left: Math.round(t.l * scale),
              width: Math.round(5 * scale),
              height: Math.round(t.h * scale),
              background: `linear-gradient(${v.mid}, transparent)`,
              borderRadius: 3,
              transformOrigin: 'top center',
              animation: `sway 4.5s ease-in-out infinite ${t.d}s`,
              transition: 'background 1.6s cubic-bezier(.16,1,.3,1)',
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}
