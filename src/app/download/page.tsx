'use client'
import Link from 'next/link'

const BASE = 'https://github.com/1ivy403/jellymate-releases/releases/download/v0.1.0'
const DOWNLOADS = {
  arm64: { url: `${BASE}/JellyMate-0.1.0-arm64.dmg`, label: 'Apple Silicon', sub: 'M1 / M2 / M3 / M4', badge: '推荐' },
  x64:   { url: `${BASE}/JellyMate-0.1.0.dmg`,       label: 'Intel Mac',    sub: 'Core i5 / i7 / i9', badge: '' },
}

const card = {
  background: 'var(--panel)',
  border: '1px solid var(--line)',
  borderRadius: 16,
  padding: '20px 24px',
} as React.CSSProperties

const btnPrimary = {
  display: 'block', width: '100%', padding: '12px 0', borderRadius: 12,
  background: 'var(--glow)', color: '#06121f', fontWeight: 600,
  fontSize: 15, textAlign: 'center', textDecoration: 'none',
  transition: 'opacity .18s',
} as React.CSSProperties

const btnSecondary = {
  ...btnPrimary,
  background: 'rgba(127,216,232,.1)',
  border: '1px solid var(--line)',
  color: 'var(--glow-soft)',
} as React.CSSProperties

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: 'linear-gradient(160deg,#0c1530 0%,#0a1228 100%)' }}>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🪼</div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>下载 JellyMate</h1>
        <p style={{ color: 'var(--ink-dim)', fontSize: 15 }}>住在屏幕边缘，陪着你上班</p>
      </div>

      {/* Download cards */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-8">
        {Object.entries(DOWNLOADS).map(([key, d]) => (
          <div key={key} style={card}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold" style={{ color: 'var(--ink)' }}>{d.label}</span>
              {d.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(127,216,232,.15)', color: 'var(--glow)', border: '1px solid var(--line)' }}>
                  {d.badge}
                </span>
              )}
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--ink-dim)' }}>{d.sub}</p>
            <a href={d.url} style={key === 'arm64' ? btnPrimary : btnSecondary}
              onMouseEnter={e => (e.currentTarget.style.opacity = '.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              下载 .dmg
            </a>
          </div>
        ))}
      </div>

      {/* Not sure which */}
      <p className="text-sm mb-10 text-center" style={{ color: 'var(--ink-dim)' }}>
        不确定芯片型号？苹果菜单 → 关于本机 → 查看「芯片」一栏
      </p>

      {/* Installation steps */}
      <div className="w-full max-w-md mb-10" style={card}>
        <h2 className="font-semibold mb-4" style={{ color: 'var(--ink)' }}>安装步骤</h2>
        <ol className="flex flex-col gap-3">
          {[
            '打开下载好的 .dmg 文件',
            '将 JellyMate 拖入 Applications 文件夹',
            '首次打开：右键 → 打开 → 确认打开（系统安全提示）',
            '水母就住进你的屏幕了 🪼',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-dim)' }}>
              <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: 'rgba(127,216,232,.1)', color: 'var(--glow)', border: '1px solid var(--line)' }}>
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-4 p-3 rounded-xl text-sm" style={{ background: 'rgba(255,200,80,.06)', border: '1px solid rgba(255,200,80,.15)', color: 'rgba(255,200,80,.8)' }}>
          ⚠️ 提示：首次打开需要右键 → 打开，这是 macOS 对未签名 App 的正常保护，我们正在申请开发者证书。
        </div>
      </div>

      {/* Footer nav */}
      <div className="flex gap-6 text-sm" style={{ color: 'var(--ink-dim)' }}>
        <Link href="/" style={{ color: 'var(--ink-dim)' }}>← 回首页</Link>
        <Link href="/app" style={{ color: 'var(--glow-soft)' }}>进入 Web 版</Link>
        <Link href="/privacy" style={{ color: 'var(--ink-dim)' }}>隐私说明</Link>
      </div>
    </main>
  )
}
