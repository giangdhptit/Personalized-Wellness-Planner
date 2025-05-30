// import { Request, Response } from 'express';
import { Request, Response, NextFunction } from 'express';
import { JiraServices } from '../services/jiraServices';

export default class JiraController {
  static async oauthCallback(req: Request, res: Response) {
    const code = req.query.code as string;
    const tokenData = await JiraServices.exchangeCodeForToken(code);
    res.json(tokenData);
  }

//   static async getProjects(req: Request, res: Response) {
//     const token = req.headers.authorization?.split(' ')[1];
//     const projects = await JiraServices.fetchProjects(token);
//     res.json(projects);
//   }

  static async getProjects(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return next(new Error('Missing access token'));

    const projects = await JiraServices.fetchProjects(token);
    res.json(projects);
  } catch (err) {
    next(err);
  }
}
}
