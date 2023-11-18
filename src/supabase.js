import { createClient } from '@supabase/supabase-js';
import { supabase_key } from './key';

const supabaseUrl = 'https://zhviitozutfknnmixsyw.supabase.co';
const supabaseKey = supabase_key;
const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = () => {
  console.log(supabase);
}

export const addUser = async () => {
  const { data, error } = await supabase
    .from('Signup')
    .insert([
      { tableid: '0', name: 'Bob' },
    ])
    .select()
  console.log(data);
}