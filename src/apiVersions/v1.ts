import { Application } from 'express';
import { googleRoutes, jiraRoutes } from '../routes';
export const apiPrefix = '/api/v1/';

export const prepareV1Routes = (app: Application): void => {
  app.use(`${apiPrefix}google`, googleRoutes);
  app.use(`${apiPrefix}jira`, jiraRoutes);
};
