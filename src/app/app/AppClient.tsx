'use client'

import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import Jellyfish from '@/components/Jellyfish'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type Session = { id: string; started_at: string; duration_min: number; completed: boolean }
type Mood = 'calm' | 'curious' | 'focus' | 'sleepy' | 'happy'

export default function AppClient({ user, recentSessions }: { user: User; recentSessions: Session[] }) {
  const [mood, setMood] = useState<Mood>('calm')
  const [focusing, setFocusing] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [timerRef, setTimerRef] = useState<ReturnType<typeof setInterval> | null>(null)
  const supabase = createClient()
  const router = useRouter()

  async function startFocus() {
    if (focusing) return
    setFocusing(true); setMood('focus')
    let t = 25 * 60; setTimeLeft(t)
    const { data } = await supabase.from('jm_focus_sessions').insert({
      user_id: user.id, duration_min: 25, completed: false,
    }).select().single()
    const sessionId = data?.id
    const iv = setInterval(async () => {
      t -= 1; setTimeLeft(t)
      if (t <= 0) {
        clearInterval(iv); setTimerRef(null)
        setFocusing(false); setMood('happy')
        if (sessionId) await supabase.from('jm_focus_sessions').update({ completed: true, ended_at: new Date().toISOString() }).eq('id', sessionId)
        router.refresh()
      }
    }, 1000)
    setTimerRef(iv)
  }

  function stopFocus() {
    if (timerRef) clearInterval(timerRef)
    setTimerRef(null); setFocusing(false); setMood('calm')
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const ss = String(timeLeft % 60).padStart(2, '0')
  const completedCount = recentSessions.filter(s => s.completed).length

  const panel: React.CSSProperties = {
    background: 'rgba(18,30,58,.82)',
    border: '1px solid var(--line)',
    borderRadius: 16,
    padding: '20px 24px',
  }

  return (
    <main
      className="min-h-screen p-6"
      style={{ background: 'linear-gradient(160deg,#0c1530 0%,#0a1228 60%,#070d1f 100%)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
        <span className="font-semibold" style={{ color: 'var(--ink)' }}>JellyMate 🪼</span>
        <button onClick={handleLogout} className="text-sm" style={{ color: 'var(--ink-dim)' }}>退出</button>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Jellyfish + mood */}
        <div className="md:col-span-1 flex flex-col items-center gap-6" style={panel}>
          <Jellyfish mood={mood} size={120} />
          <div className="flex flex-wrap justify-center gap-2">
            {(['calm','curious','focus','sleepy','happy'] as Mood[]).map(m => (
              <button
                key={m}
                onClick={() => setMood(m)}
                className="text-xs px-3 py-1.5 rounded-lg transition-all"
                style={{
                  background: mood === m ? 'var(--glow)' : 'rgba(127,216,232,.08)',
                  color: mood === m ? '#06121f' : 'var(--glow-soft)',
                  border: '1px solid var(--line)',
                }}
              >
                {{ calm:'安静', curious:'好奇', focus:'专注', sleepy:'困倦', happy:'开心' }[m]}
              </button>
            ))}
          </div>
        </div>

        {/* Focus */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div style={panel}>
            <h2 className="font-semibold mb-4" style={{ color: 'var(--ink)' }}>专注陪伴</h2>
            {focusing ? (
              <div className="flex items-center gap-6">
                <div className="text-4xl font-mono font-bold" style={{ color: 'var(--glow)' }}>
                  {mm}:{ss}
                </div>
                <button onClick={stopFocus} className="px-5 py-2 rounded-xl text-sm" style={{ background: 'rgba(255,100,100,.15)', color: '#ff8080', border: '1px solid rgba(255,100,100,.3)' }}>
                  结束专注
                </button>
              </div>
            ) : (
              <button onClick={startFocus} className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all" style={{ background: 'var(--glow)', color: '#06121f' }}>
                ▶ 开始 25 分钟专注
              </button>
            )}
          </div>

          {/* Stats */}
          <div style={panel}>
            <h2 className="font-semibold mb-4" style={{ color: 'var(--ink)' }}>最近专注</h2>
            {recentSessions.length === 0 ? (
              <p className="text-sm" style={{ color: 'var(--ink-dim)' }}>还没有专注记录，开始第一次吧 🪼</p>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-sm mb-3" style={{ color: 'var(--ink-dim)' }}>
                  最近 {recentSessions.length} 次 · 完成 {completedCount} 次
                </p>
                {recentSessions.slice(0, 5).map(s => (
                  <div key={s.id} className="flex items-center justify-between text-sm py-2" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span style={{ color: 'var(--ink-dim)' }}>
                      {new Date(s.started_at).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span style={{ color: s.completed ? 'var(--glow)' : 'var(--ink-dim)' }}>
                      {s.completed ? `✓ ${s.duration_min} 分钟` : '未完成'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Account */}
          <div style={{ ...panel, padding: '16px 24px' }}>
            <p className="text-xs" style={{ color: 'var(--ink-dim)' }}>
              登录邮箱：{user.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
