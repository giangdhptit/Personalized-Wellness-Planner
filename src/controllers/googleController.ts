import { Request, Response, NextFunction } from 'express';
import { GoogleServices } from '../services';
import { GeneralErrorsFactory, GeneralResponsesFactory } from '../factories';

export default class GoogleController {
  static async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = req.body;

      const isUserFound = await GoogleServices.getContection({
        email: data.email,
      });

      if (!isUserFound) return next(GeneralErrorsFactory.badRequestErr());

      const success = true;

      if (success) {
        return next(
          GeneralResponsesFactory.dataDeletedSuccessfully({
            data: {},
            key: 'google',
          })
        );
      } else {
        throw GeneralErrorsFactory.internalErr();
      }
    } catch (error) {
      next(error);
    }
  }
}
