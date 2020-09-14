import { getRegion, getAccountNumber } from '../config';

export const getTopicArn = (topicName: string): string =>
  `arn:aws:sns:${getRegion()}:${getAccountNumber()}:${topicName}`;
