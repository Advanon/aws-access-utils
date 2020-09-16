import AWSXRay from  'aws-xray-sdk';
import AWSSdk from 'aws-sdk';

import { isOffline } from '../config';

export default isOffline() ? AWSSdk : (AWSXRay.captureAWS(AWSSdk) as typeof AWSSdk);
