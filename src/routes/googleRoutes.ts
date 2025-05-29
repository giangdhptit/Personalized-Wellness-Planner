import express, { Router } from 'express';
import { catchAsync } from '../utils';
import {
  validateGoogleAccessTokenMiddleware,
  validatorMiddleware,
} from '../middlewares';
import { GoogleController } from '../controllers';
import { googleSchema } from '../schema';

const router: Router = express.Router();

router.get('/auth', catchAsync(GoogleController.generateAuthUrl));

router.get('/auth/callback', catchAsync(GoogleController.handleAuthCallback));

router.get(
  '/calendar/events',
  validatorMiddleware(googleSchema.validateGetCalendarEvents, 'query'),
  validateGoogleAccessTokenMiddleware,
  catchAsync(GoogleController.getGoogleCalendarEvents)
);

router.post(
  '/calendar/events',
  validatorMiddleware(googleSchema.validateCreateCalendarEvent, 'body'),
  validateGoogleAccessTokenMiddleware,
  catchAsync(GoogleController.createGoogleCalendarEvent)
);

router.patch(
  '/calendar/events/:eventId',
  validatorMiddleware(googleSchema.validateCreateCalendarEvent, 'body'),
  validateGoogleAccessTokenMiddleware,
  catchAsync(GoogleController.updateGoogleCalendarEvent)
);

router.delete(
  '/calendar/events/:eventId',
  validatorMiddleware(googleSchema.validateDeleteCalendarEvent, 'params'),
  validateGoogleAccessTokenMiddleware,
  catchAsync(GoogleController.deleteGoogleCalendarEvent)
);

export default router;
