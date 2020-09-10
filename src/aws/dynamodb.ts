import AWS from './aws';

import {
  isOffline,
  getLocalRegion,
  getRegion,
  getLocalEndpointDynamoDB
} from '../config';

const options = {
  convertEmptyValues: true,
  region: getRegion(),
};

const optionsLocal = {
  convertEmptyValues: true,
  region: getLocalRegion(),
  endpoint: getLocalEndpointDynamoDB()
};

export default {
  doc: isOffline() ?
    new AWS.DynamoDB.DocumentClient(optionsLocal) :
    new AWS.DynamoDB.DocumentClient(options),
  raw: isOffline() ? new AWS.DynamoDB(optionsLocal) : new AWS.DynamoDB(options)
};
