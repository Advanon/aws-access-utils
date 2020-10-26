import AWS from './aws';

import {
  isOffline,
  getLocalRegion,
  getLocalEndpointSqs,
  getRegion
} from '../config';

const options = {
  region: getRegion(),
  apiVersion: '2012-11-05'
};

const optionsLocal = {
  region: getLocalRegion(),
  endpoint: getLocalEndpointSqs(),
};

export const sqs = new AWS.SQS(isOffline() ? optionsLocal : options);
