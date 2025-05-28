import { Request, Response, NextFunction } from 'express';
import { GoogleServices } from '../services';
import { GeneralErrorsFactory, GeneralResponsesFactory } from '../factories';
import config from 'config';
import { googleUtils } from '../utils';
import { people as googlePeopleApi } from '@googleapis/people';
import { gmail as gmailApi } from '@googleapis/gmail';
import AuthErrorsFactory from '../factories/errors/AuthErrors';
import { calendar as googleCalanderApi } from '@googleapis/calendar';

export default class GoogleController {
  static async generateAuthUrl(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { auth, scopes } = googleUtils;

      const url = auth.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
      });

      return next(
        GeneralResponsesFactory.successResponse({
          data: url,
          key: 'url',
          message: 'Google authentication URL generated successfully',
          statusCode: 200,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  static async handleAuthCallback(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { code } = req.query;
      const { auth } = googleUtils;

      if (!code)
        return res.redirect(
          `${config.get<string>('hostUrl')}/api/v1/auth/google`
        );

      const tokens = await auth.getToken(code as string);
      auth.setCredentials(tokens.tokens);

      const people = googlePeopleApi({ auth: auth, version: 'v1' });

      const peopleResponse = await people.people.get({
        resourceName: 'people/me',
        personFields: 'emailAddresses,names,photos',
      });

      const findConnection = await GoogleServices.findConnection({
        type: 'GOOGLE',
        email: peopleResponse.data.emailAddresses?.[0]?.value || '',
      });

      console.log(tokens);

      let doc;
      if (findConnection.success && findConnection.data) {
        doc = await GoogleServices.updateConnection({
          id: findConnection.data._id,
          type: 'GOOGLE',
          name: peopleResponse.data.names?.[0]?.displayName || '',
          email: peopleResponse.data.emailAddresses?.[0]?.value || '',
          tokens: tokens.tokens,
        });
      } else {
        doc = await GoogleServices.saveConnection({
          type: 'GOOGLE',
          name: peopleResponse.data.names?.[0]?.displayName || '',
          email: peopleResponse.data.emailAddresses?.[0]?.value || '',
          tokens: tokens.tokens,
        });

        if (!doc.success) {
          return next(
            GeneralErrorsFactory.badRequestErr({
              customMessage: 'Failed to update Google connection',
            })
          );
        }
      }

      // const gmail = gmailApi({
      //   auth: auth,
      //   version: 'v1',
      // });

      // const response = await gmail.users.messages.list({
      //   userId: 'me',
      //   maxResults: 10,
      //   labelIds: ['INBOX'],
      // });

      // console.log(response.data.messages);

      // const messages = response.data?.messages?.[0] || null;

      // if (messages) {
      //   const messageDetails = await gmail.users.messages.get({
      //     userId: 'me',
      //     id: messages.id!,
      //   });

      //   console.log(messageDetails.data.payload);
      // } else {
      //   console.log('No messages found.');
      // }

      return next(
        GeneralResponsesFactory.successResponse({
          data: peopleResponse.data,
          key: 'googleTokens',
          message: 'Google authentication successful',
          statusCode: 200,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async getGoogleCalendarEvents(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { auth } = googleUtils;

      console.log(auth);

      const calendar = googleCalanderApi({
        auth: auth,
        version: 'v3',
      });

      const now = new Date();
      const oneWeekLater = new Date();
      oneWeekLater.setDate(now.getDate() + 7);

      const response = await calendar.events.list({
        calendarId: 'primary', // or use specific calendar ID
        timeMin: now.toISOString(),
        timeMax: oneWeekLater.toISOString(),
        maxResults: 20,
        singleEvents: true,
        orderBy: 'startTime',
      });

      return next(
        GeneralResponsesFactory.successResponse({
          data: response.data,
          key: 'gmailMessages',
          message: 'Gmail messages retrieved successfully',
          statusCode: 200,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}
