import AWS from './aws';

import { isOffline, getLocalEndpointSsm, getLocalRegion } from '../config';

const ssm = isOffline() ?
  new AWS.SSM({ region: getLocalRegion(), endpoint: getLocalEndpointSsm() }) :
  new AWS.SSM();

export const resolve = async (key: string): Promise<string | undefined> => {
  const { Parameter } = await ssm
    .getParameter({
      Name: key,
      WithDecryption: true
    }).promise();

  return Parameter?.Value;
};
