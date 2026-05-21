import Link from 'next/link'
import Jellyfish from '@/components/Jellyfish'

const features = [
  { icon: '🌊', title: '住在屏幕边缘', desc: '不是弹窗，不是通知。它只是在那里，像真的住在角落里。' },
  { icon: '🫧', title: '低打扰陪伴', desc: '轻轻探头、吐泡泡，60 秒无操作自动隐身，不打扰你工作。' },
  { icon: '⏱', title: '专注陪伴', desc: '双击开启 25 分钟专注，完成后一起庆祝，比番茄钟更有温度。' },
  { icon: '🎨', title: '有情绪，有边界', desc: '它会好奇、困倦、开心，你也随时可以让它退下。' },
]

export default function HomePage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: 'radial-gradient(900px 600px at 78% 18%, #1a2b52 0%, transparent 60%), radial-gradient(700px 500px at 20% 88%, #142244 0%, transparent 55%), linear-gradient(160deg, #0c1530 0%, #0a1228 60%, #070d1f 100%)',
      }}
    >
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <span className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
          JellyMate 🪼
        </span>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm px-4 py-2 rounded-xl transition-all" style={{ color: 'var(--ink-dim)', border: '1px solid var(--line)' }}>
            登录
          </Link>
          <Link href="/download" className="text-sm px-4 py-2 rounded-xl font-medium transition-all hover:opacity-90" style={{ background: 'var(--glow)', color: '#06121f' }}>
            下载 App
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center pt-16 pb-24 px-6">
        <div className="mb-8 relative">
          <Jellyfish mood="happy" size={160} />
          <div className="absolute text-sm px-4 py-2 rounded-2xl rounded-bl-sm whitespace-nowrap" style={{ background: 'rgba(231,247,250,.95)', color: '#0a2540', top: 12, left: -110, boxShadow: '0 8px 24px rgba(0,0,0,.3)' }}>
            嗯，陪着你 🪼
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-5 leading-tight" style={{ color: 'var(--ink)' }}>
          屏幕边缘的<br />小水母陪伴
        </h1>
        <p className="text-lg max-w-md mb-10 leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
          不是效率工具，也不是养成游戏。<br />
          只是静静陪着你上班，<br />
          在你需要的时候在，不需要的时候退下。
        </p>
        <div className="flex gap-4">
          <Link href="/download" className="px-7 py-3 rounded-2xl font-semibold text-base transition-all hover:opacity-90" style={{ background: 'var(--glow)', color: '#06121f' }}>
            下载 macOS App
          </Link>
          <Link href="/demo" className="px-7 py-3 rounded-2xl text-base transition-all" style={{ background: 'rgba(127,216,232,.1)', color: 'var(--glow-soft)', border: '1px solid var(--line)' }}>
            先看演示
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6" style={{ background: 'rgba(18,30,58,.6)', border: '1px solid var(--line)', backdropFilter: 'blur(12px)' }}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--ink)' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center pb-24 px-6">
        <p className="text-sm mb-6" style={{ color: 'var(--ink-dim)' }}>macOS 原生 App · 免费下载</p>
        <Link href="/download" className="inline-block px-8 py-4 rounded-2xl font-semibold text-base transition-all hover:opacity-90" style={{ background: 'var(--glow)', color: '#06121f' }}>
          下载 JellyMate →
        </Link>
      </section>

      <footer className="text-center pb-8 text-xs flex items-center justify-center gap-4" style={{ color: 'var(--ink-dim)', opacity: 0.5 }}>
        <span>JellyMate · 低打扰陪伴</span>
        <Link href="/privacy" style={{ color: 'var(--ink-dim)' }}>隐私说明</Link>
      </footer>
    </main>
  )
}
