import axios from 'axios';
import { JiraToken } from '../models/jiraToken';
import PlatformModel from "../models/PlatformsModel";

export class JiraServices {
  static async exchangeCodeForToken(code: string): Promise<JiraToken> {
    // const response = await axios.post('https://auth.atlassian.com/oauth/token', {
    const response = await axios.post<JiraToken>('https://auth.atlassian.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: process.env.JIRA_CLIENT_ID,
      client_secret: process.env.JIRA_CLIENT_SECRET,
      code,
      redirect_uri: process.env.JIRA_REDIRECT_URI,
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  }

  static async fetchProjects(token: string) {
    const response = await axios.get('https://api.atlassian.com/ex/jira/{cloudid}/rest/api/3/project', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    return response.data;
  }

  static async saveJiraToken(data: any) {
    console.log("Jira: saving token to MongoDB...");

    const { access_token, refresh_token, scope, token_type, expires_in } = data;

    const expiryDate = Date.now() + expires_in * 1000;

    const platform = new PlatformModel({
      type: "JIRA",
      name: "Jira User", // TODO: Link the username
      email: "example@example.com", // TODO: Link the email
      tokens: {
        access_token,
        refresh_token,
        scope,
        token_type,
        expires_in,
      },
      // expiry_date: expiryDate, // additional fields when required
    });

    await platform.save();
    console.log("Token saved.");
  }

}
