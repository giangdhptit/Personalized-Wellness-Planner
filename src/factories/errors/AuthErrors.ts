import AppError from './AppError';

export default class AuthErrorsFactory {
  static unauthorized(): AppError {
    return new AppError({
      message: "You're not allowed for this action",
      statusCode: 403,
    });
  }

  static unauthenticated(): AppError {
    return new AppError({
      message: "You're not authenticated for this action. Please login again",
      statusCode: 401,
    });
  }
}
