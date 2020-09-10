import AWSXRay from  'aws-xray-sdk';
import AWSSdk from 'aws-sdk';

export default AWSXRay.captureAWS(AWSSdk) as typeof AWSSdk;
