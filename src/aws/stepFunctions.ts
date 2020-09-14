import AWS from './aws';

import {
  isOffline,
  getLocalRegion,
  getLocalEndpointStepFunctions
} from '../config';

const options = {
  ...isOffline() && {
    region: getLocalRegion(),
    endpoint: getLocalEndpointStepFunctions(),
  }
};

export default new AWS.StepFunctions(options);
