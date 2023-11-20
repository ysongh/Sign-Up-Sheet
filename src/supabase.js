import { createClient } from '@supabase/supabase-js';
import { supabase_key } from './key';

const supabaseUrl = 'https://zhviitozutfknnmixsyw.supabase.co';
const supabaseKey = supabase_key;
const supabase = createClient(supabaseUrl, supabaseKey);

export const connect = () => {
  console.log(supabase);
}

export const addSignUp = async (title, description) => {
  const { data, error } = await supabase
    .from('List')
    .insert([
      { title: title, description: description},
    ])
    .select()
  console.log(data);
}

export const addName = async (tableID, name) => {
  const { data, error } = await supabase
    .from('Signup')
    .insert([
      { tableid: tableID, name: name },
    ])
    .select()
  console.log(data);
}

export const getList = async () => {
  let { data: List, error } = await supabase
    .from('List')
    .select('*');
  console.log(List, error);
  if (error) return [];
  return List;
}