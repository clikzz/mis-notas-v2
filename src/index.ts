import { Elysia } from 'elysia';
import { printTitle } from './utils/figlet';
import { createClient } from '@supabase/supabase-js';
import { registerRoutes } from './routes';

console.log(printTitle('Mis Notas v2 - Backend'));

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = new Elysia();

registerRoutes(app, supabase);

app.listen(3000);

if (app.server)
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
if (supabase) console.log('🔗 Connected to Supabase');
