import { Application } from 'express';
import { googleRoutes } from '../routes';
import express from 'express';
import jiraRoutes from '../routes/jiraRoutes';

export const apiPrefix = '/api/v1/';

export const prepareV1Routes = (app: Application): void => {
  app.use(`${apiPrefix}google`, googleRoutes);
  app.use(`${apiPrefix}jira`, jiraRoutes);
};

// const router = express.Router();
// router.use('/jira', jiraRoutes); // /api/v1/jira\

// export default router;