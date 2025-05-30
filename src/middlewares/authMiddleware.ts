import { Request, Response, NextFunction } from 'express';

export const requireJiraAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Authorization header required' });
  }
  next();
};
