'use client';
import { useAuth } from '@clerk/nextjs'
import supabase from '../lib/supabaseClient'
import { db } from '../lib/db';

export default function Home() {
  const { getToken } = useAuth()

  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const token:string|null = await getToken({ template: 'supabase' })

    if(token){
        supabase.auth.setSession({
            access_token: token,
            refresh_token: ''
        });
    }
    
    // TODO #2: Replace with your database table name
    const { data, error } = await supabase.from('user').select()

   console.log(JSON.stringify(data));
  }

  return (
    <button type="button" onClick={fetchData}>
      Fetch data
    </button>
  )
}
