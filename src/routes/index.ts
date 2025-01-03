import { Elysia } from 'elysia';
import { registerSemesterRoutes } from './semesters.routes';
import { printTitle } from '../utils/figlet';

export function registerRoutes(app: Elysia, supabase: any) {
  app.get('/', () => printTitle('Mis Notas v2 - Backend'));
  registerSemesterRoutes(app, supabase);
}
