import AWS from './aws';

import {
  isOffline,
  getLocalRegion,
  getLocalEndpointSns,
  getRegion
} from '../config';

const options = {
  region: getRegion(),
  apiVersion: '2010-03-31'
};

const optionsLocal = {
  region: getLocalRegion(),
  endpoint: getLocalEndpointSns(),
};

export const sns = new AWS.SNS(isOffline() ? optionsLocal : options);
