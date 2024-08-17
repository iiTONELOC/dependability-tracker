import {Email} from '../types';
import {PORT} from '../../../server';
import {sendEmail} from '../sendEmail';
import {credentialInviteTemplate} from '../email-templates';

export const sendCredentialInvite = async (
  email: string,
  token: string,
  inviteId: string,
  username: string
): Promise<boolean> => {
  const port = PORT;

  const URL = `${process.env.APP_HOST_URL}:${port}/sign-up/`;

  const emailData: Email = {
    from: process.env.EMAIL_SENDER as string,
    to: email,
    subject: 'Dependability Tracker - Create Credential Invite',
    html: credentialInviteTemplate(inviteId, username, token, URL)
  };

  return await sendEmail(emailData);
};
