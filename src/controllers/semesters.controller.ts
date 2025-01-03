import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getSemestersById({ params }: any) {
  const { id } = params;

  const { data, error } = await supabase
    .from('semesters')
    .select('*')
    .eq('uid', id);

  if (error) {
    return { status: 500, body: { error: error.message } };
  }

  return { body: data };
}

export async function createSemester({ body }: any) {
  const { name, start_date, end_date } = body;

  const { data, error } = await supabase
    .from('semesters')
    .insert([{ name, start_date, end_date }]);

  if (error) {
    return { status: 500, body: { error: error.message } };
  }

  return { status: 201, body: data };
}

export async function updateSemester({ params, body }: any) {
  const { id } = params;
  const { name, start_date, end_date } = body;

  const { data, error } = await supabase
    .from('semesters')
    .update({ name, start_date, end_date })
    .eq('id', id);

  if (error) {
    return { status: 500, body: { error: error.message } };
  }

  return { body: data };
}

export async function deleteSemester({ params }: any) {
  const { id } = params;

  const { data, error } = await supabase
    .from('semesters')
    .delete()
    .eq('id', id);

  if (error) {
    return { status: 500, body: { error: error.message } };
  }

  return { status: 204, body: data };
}
