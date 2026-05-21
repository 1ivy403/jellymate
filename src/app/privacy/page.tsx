import Link from 'next/link'

const section = { marginBottom: 32 } as React.CSSProperties
const h2Style = { color: 'var(--ink)', fontWeight: 600, fontSize: 18, marginBottom: 12 } as React.CSSProperties
const pStyle  = { color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.75, marginBottom: 10 } as React.CSSProperties
const liStyle = { color: 'var(--ink-dim)', fontSize: 14, lineHeight: 1.75, marginBottom: 6, paddingLeft: 16 } as React.CSSProperties

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-16"
      style={{ background: 'linear-gradient(160deg,#0c1530 0%,#0a1228 100%)' }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-sm" style={{ color: 'var(--ink-dim)' }}>← 返回首页</Link>
          <h1 className="text-3xl font-bold mt-6 mb-2" style={{ color: 'var(--ink)' }}>隐私说明</h1>
          <p style={{ color: 'var(--ink-dim)', fontSize: 14 }}>最后更新：2026 年 5 月</p>
        </div>

        {/* 收集什么 */}
        <div style={section}>
          <h2 style={h2Style}>我们收集什么</h2>
          <p style={pStyle}>JellyMate 只收集运行产品所必需的最少数据：</p>
          <ul>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>账号信息</strong>：邮箱地址、加密后的密码哈希（bcrypt，服务端从不存明文）</li>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>专注记录</strong>：专注开始时间、时长、是否完成</li>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>设备信息</strong>：Mac 芯片架构（Intel/Apple Silicon）、macOS 版本、App 版本号</li>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>使用事件</strong>：功能使用统计（如专注次数、心情切换），用于改进产品</li>
          </ul>
        </div>

        {/* 不收集什么 */}
        <div style={section}>
          <h2 style={h2Style}>我们绝不收集</h2>
          <ul>
            <li style={liStyle}>· 键盘输入内容</li>
            <li style={liStyle}>· 屏幕截图或录屏</li>
            <li style={liStyle}>· 位置信息</li>
            <li style={liStyle}>· 剪贴板内容</li>
            <li style={liStyle}>· 任何其他应用的数据</li>
          </ul>
          <p style={pStyle}>水母只是住在你屏幕角落，不窥探任何东西。</p>
        </div>

        {/* 如何存储 */}
        <div style={section}>
          <h2 style={h2Style}>数据如何存储</h2>
          <p style={pStyle}>所有数据存储在 <a href="https://supabase.com" target="_blank" rel="noopener" style={{ color: 'var(--glow-soft)' }}>Supabase</a>（美国西部，PostgreSQL 数据库），传输全程 HTTPS 加密。</p>
          <p style={pStyle}>App 本地将登录凭证（JWT Token）存储在系统安全区域，不写入明文文件。</p>
        </div>

        {/* 第三方 */}
        <div style={section}>
          <h2 style={h2Style}>第三方服务</h2>
          <ul>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>Supabase</strong>（认证 + 数据库）：<a href="https://supabase.com/privacy" target="_blank" rel="noopener" style={{ color: 'var(--glow-soft)' }}>隐私政策</a></li>
            <li style={liStyle}>· <strong style={{ color: 'var(--ink)' }}>Vercel</strong>（官网托管）：<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" style={{ color: 'var(--glow-soft)' }}>隐私政策</a></li>
          </ul>
          <p style={pStyle}>我们不向任何广告平台出售或共享你的数据。</p>
        </div>

        {/* 删除数据 */}
        <div style={section}>
          <h2 style={h2Style}>删除你的数据</h2>
          <p style={pStyle}>你随时可以在 App 内注销账号。注销后，我们将在 30 天内从数据库中删除你的全部个人数据（专注记录、账号信息、设备记录）。</p>
          <p style={pStyle}>如有任何问题，发邮件至 <a href="mailto:hi@jellymate.app" style={{ color: 'var(--glow-soft)' }}>hi@jellymate.app</a></p>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-dim)', fontSize: 13 }}>
          <Link href="/" style={{ color: 'var(--ink-dim)' }}>JellyMate 🪼</Link>
          {' · '}
          <Link href="/download" style={{ color: 'var(--ink-dim)' }}>下载</Link>
        </div>
      </div>
    </main>
  )
}
