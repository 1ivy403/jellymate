import Link from 'next/link'
import Jellyfish from '@/components/Jellyfish'

const features = [
  {
    icon: '🌊',
    title: '住在屏幕边缘',
    desc: '不是弹窗，不是通知。它只是在那里，像真的住在角落里。',
  },
  {
    icon: '🫧',
    title: '低打扰',
    desc: '轻轻探头，60 秒无操作自动隐身，不打扰你工作。',
  },
  {
    icon: '⏱',
    title: '陪你专注',
    desc: '双击开启 25 分钟专注，完成后一起庆祝。',
  },
]

export default function HomePage() {
  return (
    <main
      style={{
        background:
          'radial-gradient(900px 600px at 78% 18%, #1a2b52 0%, transparent 60%), radial-gradient(700px 500px at 20% 88%, #142244 0%, transparent 55%), linear-gradient(160deg, #0c1530 0%, #0a1228 60%, #070d1f 100%)',
        minHeight: '100vh',
      }}
    >
      {/* ── Nav ── */}
      <nav
        style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 32px' }}
        className="flex items-center justify-between"
      >
        <span style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 17 }}>
          JellyMate 🪼
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            style={{ background: 'var(--glow)', color: '#06121f', fontSize: 14, fontWeight: 600, padding: '8px 18px', borderRadius: 10 }}
            className="hover:opacity-90 transition-opacity"
          >
            下载 App
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 72px' }}
        className="flex flex-col items-center text-center"
      >
        {/* Jellyfish */}
        <div style={{ position: 'relative', marginBottom: 36 }}>
          <Jellyfish mood="happy" size={200} />
          <div
            style={{
              position: 'absolute',
              background: 'rgba(231,247,250,.95)',
              color: '#0a2540',
              fontSize: 13,
              padding: '8px 14px',
              borderRadius: '12px 12px 12px 2px',
              top: 16,
              left: -120,
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(0,0,0,.3)',
            }}
          >
            嗯，陪着你 🪼
          </div>
        </div>

        {/* Text */}
        <h1
          style={{
            color: 'var(--ink)',
            fontSize: 'clamp(36px, 5vw, 58px)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          屏幕边缘的陪伴
        </h1>
        <p
          style={{
            color: 'var(--ink-dim)',
            fontSize: 18,
            maxWidth: 420,
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          低打扰，有边界感。
        </p>

        {/* CTAs */}
        <div className="flex gap-3">
          <Link
            href="/download"
            style={{ background: 'var(--glow)', color: '#06121f', fontWeight: 600, fontSize: 16, padding: '13px 28px', borderRadius: 14 }}
            className="hover:opacity-90 transition-opacity"
          >
            下载 macOS App
          </Link>
          <Link
            href="/demo"
            style={{ background: 'rgba(127,216,232,.1)', color: 'var(--glow-soft)', border: '1px solid var(--line)', fontSize: 16, padding: '13px 28px', borderRadius: 14 }}
            className="hover:opacity-90 transition-opacity"
          >
            先看演示
          </Link>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px 96px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: 'rgba(18,30,58,.6)',
                border: '1px solid var(--line)',
                borderRadius: 18,
                padding: '28px 28px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 17, marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ textAlign: 'center', paddingBottom: 96 }}>
        <Link
          href="/download"
          style={{ background: 'var(--glow)', color: '#06121f', fontWeight: 600, fontSize: 17, padding: '15px 36px', borderRadius: 16, display: 'inline-block' }}
          className="hover:opacity-90 transition-opacity"
        >
          下载 JellyMate →
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 32px 32px',
          borderTop: '1px solid var(--line)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: 0.5,
        }}
      >
        <span style={{ color: 'var(--ink-dim)', fontSize: 13 }}>JellyMate 🪼</span>
        <Link href="/privacy" style={{ color: 'var(--ink-dim)', fontSize: 13 }}>
          隐私说明
        </Link>
      </footer>
    </main>
  )
}
