// import express from 'express';
import express, { Request, Response } from 'express';
import axios from 'axios';
import JiraController from '../controllers/jiraController';
import { requireJiraAuth } from '../middlewares/authMiddleware';
import { JiraServices } from '../services/jiraServices';

const router = express.Router();

// step 1: OAuth Callback (token generation)
// router.get('/callback', JiraController.oauthCallback);
router.get('/callback', async (req: Request, res: Response) => {
  const code = req.query.code as string;
  console.log("Received OAuth callback with code:", code);

  try {
    const tokenResponse = await axios.post('https://auth.atlassian.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: process.env.JIRA_CLIENT_ID,
      client_secret: process.env.JIRA_CLIENT_SECRET,
      code,
      redirect_uri: process.env.JIRA_REDIRECT_URI
    }) as any;

    console.log('✅ Access Token:', tokenResponse.data.access_token);

    await JiraServices.saveJiraToken(tokenResponse.data);

    console.log("Jira: saving token to MongoDB...");
    res.json(tokenResponse.data); // access_token, refresh_token 등 표시
    res.status(200).json({ message: 'Token saved successfully' });

  } catch (error: any) {
    console.error('❌ Token Error:', error.response?.data || error.message);
    res.status(500).send('Access token generation failed');
  }
});

// step 2: Jira API test
router.get('/projects', requireJiraAuth, JiraController.getProjects);

export default router;
