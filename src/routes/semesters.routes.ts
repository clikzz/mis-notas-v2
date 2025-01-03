import { Elysia } from 'elysia';
import {
  getSemestersById,
  createSemester,
  updateSemester,
  deleteSemester,
} from '../controllers/semesters.controller';

export function registerSemesterRoutes(app: Elysia) {
  app.get('/semesters/:id', (req: any, res: any) => getSemestersById(req, res));

  app.post('/semesters', (req: any, res: any) => createSemester(req, res));

  app.put('/semesters/:id', (req: any, res: any) => updateSemester(req, res));

  app.delete('/semesters/:id', (req: any, res: any) =>
    deleteSemester(req, res)
  );
}
