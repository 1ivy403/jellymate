import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0a1228' }}>
      <div className="flex items-center justify-between px-6 py-3" style={{ borderBottom: '1px solid var(--line)' }}>
        <Link href="/" className="text-sm" style={{ color: 'var(--ink-dim)' }}>← 返回</Link>
        <span className="text-sm" style={{ color: 'var(--ink-dim)' }}>JellyMate · 交互演示</span>
        <Link href="/download" className="text-sm px-4 py-1.5 rounded-lg" style={{ background: 'var(--glow)', color: '#06121f' }}>
          下载 App
        </Link>
      </div>
      <iframe
        src="/prototype.html"
        className="flex-1 w-full border-none"
        title="JellyMate 原型演示"
      />
    </div>
  )
}
