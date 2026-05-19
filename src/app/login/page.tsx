'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false) }
    else router.push('/app')
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    background: 'rgba(127,216,232,.06)', border: '1px solid var(--line)',
    color: 'var(--ink)', fontSize: 14, outline: 'none',
  } as React.CSSProperties

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(160deg,#0c1530 0%,#0a1228 100%)' }}>
      <div className="w-full max-w-sm rounded-2xl p-8" style={{ background: 'rgba(18,30,58,.88)', border: '1px solid var(--line)' }}>
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--ink)' }}>欢迎回来 🪼</h1>
        <p className="text-sm mb-8" style={{ color: 'var(--ink-dim)' }}>水母在等你</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input style={inputStyle} type="email" placeholder="邮箱" value={email} onChange={e => setEmail(e.target.value)} required />
          <input style={inputStyle} type="password" placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <p className="text-sm" style={{ color: '#ff8080' }}>{error}</p>}
          <button type="submit" disabled={loading} className="py-3 rounded-xl font-semibold transition-all hover:opacity-90" style={{ background: 'var(--glow)', color: '#06121f' }}>
            {loading ? '登录中…' : '登录'}
          </button>
        </form>
        <p className="text-center text-sm mt-6" style={{ color: 'var(--ink-dim)' }}>
          没有账号？{' '}
          <Link href="/signup" style={{ color: 'var(--glow-soft)' }}>免费注册</Link>
        </p>
      </div>
    </main>
  )
}
