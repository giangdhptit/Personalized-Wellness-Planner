import express, { Router } from 'express';
import { catchAsync } from '../utils';
import { validatorMiddleware } from '../middlewares';
import { GoogleController } from '../controllers';
import { googleSchema } from '../schema';

const router: Router = express.Router();

router.get(
  '/auth',
  validatorMiddleware(googleSchema.validateAuth, 'body'),
  catchAsync(GoogleController.createUser)
);

export default router;
