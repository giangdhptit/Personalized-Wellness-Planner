import { Request, Response, NextFunction } from 'express';

// export const requireJiraAuth = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.headers.authorization) {
//     return res.status(401).json({ error: 'Authorization header required' });
//   }
//   next();
// };

export const requireJiraAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  next();
};