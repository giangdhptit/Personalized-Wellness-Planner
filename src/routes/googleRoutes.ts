import express, { Router } from 'express';
import { catchAsync } from '../utils';
import { validateGoogleAccessTokenMiddleware } from '../middlewares';
import { GoogleController } from '../controllers';
import { googleSchema } from '../schema';

const router: Router = express.Router();

router.get(
  '/auth',
  // validatorMiddleware(googleSchema.validateAuth, 'body'),
  catchAsync(GoogleController.generateAuthUrl)
);

router.get('/auth/callback', catchAsync(GoogleController.handleAuthCallback));

router.get(
  '/calendar',
  validateGoogleAccessTokenMiddleware,
  catchAsync(GoogleController.getGoogleCalendarEvents)
);

export default router;
