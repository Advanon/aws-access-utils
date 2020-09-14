import {
  SendTemplatedEmailRequest,
  SendTemplatedEmailResponse,
  SendEmailRequest,
  SendEmailResponse,
} from 'aws-sdk/clients/ses';

import AWS from './aws';

import { isOffline, getLocalEndpointSes } from '../config';

const ses = isOffline() ? new AWS.SES({ endpoint: getLocalEndpointSes() }) : new AWS.SES();

export const sendTemplatedEmail = async (request: SendTemplatedEmailRequest): Promise<SendTemplatedEmailResponse> =>
  ses.sendTemplatedEmail(request).promise();

export const sendEmail = async (request: SendEmailRequest): Promise<SendEmailResponse> =>
  ses.sendEmail(request).promise();
