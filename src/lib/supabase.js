import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qaloxaoqonqxttmhhwiu.supabase.co/rest/v1/'
const supabaseAnonKey = '61e674dc-07d8-4829-a7e4-4f79f8510a2e'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)