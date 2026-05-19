import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AppClient from './AppClient'

export default async function AppPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: sessions } = await supabase
    .from('jm_focus_sessions')
    .select('*')
    .eq('user_id', user.id)
    .order('started_at', { ascending: false })
    .limit(10)

  return <AppClient user={user} recentSessions={sessions ?? []} />
}
