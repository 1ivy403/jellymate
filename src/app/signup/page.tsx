'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    })
    if (error) { setError(error.message); setLoading(false) }
    else setDone(true)
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    background: 'rgba(127,216,232,.06)', border: '1px solid var(--line)',
    color: 'var(--ink)', fontSize: 14, outline: 'none',
  } as React.CSSProperties

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(160deg,#0c1530 0%,#0a1228 100%)' }}>
      <div className="w-full max-w-sm rounded-2xl p-8" style={{ background: 'rgba(18,30,58,.88)', border: '1px solid var(--line)' }}>
        {done ? (
          <div className="text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--ink)' }}>检查一下邮箱</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--ink-dim)' }}>
              我们发了一封确认邮件，点击链接后会自动跳到下载页面
            </p>
            <div className="p-3 rounded-xl text-sm mb-4" style={{ background: 'rgba(127,216,232,.06)', border: '1px solid var(--line)' }}>
              <p style={{ color: 'var(--ink-dim)' }}>也可以现在先去下载：</p>
            </div>
            <a href="/download"
              className="block py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'var(--glow)', color: '#06121f' }}>
              前往下载 JellyMate →
            </a>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--ink)' }}>加入水母陪伴 🪼</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--ink-dim)' }}>免费开始，随时可以退出</p>
            <form onSubmit={handleSignup} className="flex flex-col gap-4">
              <input style={inputStyle} type="email" placeholder="邮箱" value={email} onChange={e => setEmail(e.target.value)} required />
              <input style={inputStyle} type="password" placeholder="密码（至少 6 位）" minLength={6} value={password} onChange={e => setPassword(e.target.value)} required />
              {error && <p className="text-sm" style={{ color: '#ff8080' }}>{error}</p>}
              <button type="submit" disabled={loading} className="py-3 rounded-xl font-semibold transition-all hover:opacity-90" style={{ background: 'var(--glow)', color: '#06121f' }}>
                {loading ? '注册中…' : '注册'}
              </button>
            </form>
            <p className="text-center text-sm mt-6" style={{ color: 'var(--ink-dim)' }}>
              已有账号？{' '}
              <Link href="/login" style={{ color: 'var(--glow-soft)' }}>登录</Link>
            </p>
          </>
        )}
      </div>
    </main>
  )
}
