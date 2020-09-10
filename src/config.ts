const DEFAULT_LOCAL_REGION = 'us-east-1';
const DEFAULT_LOCAL_URL_DYNAMODB = 'http://localhost:4566';
const DEFAULT_LOCAL_URL_SNS = 'http://localhost:4566';
const DEFAULT_LOCAL_URL_STEPFUNCTIONS = 'http://localhost:4566';
const DEFAULT_LOCAL_URL_SES = 'http://localhost:4566';

export const isOffline = (): boolean => !!process.env.IS_OFFLINE;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const getRegion = (): string => process.env.AWS_REGION!;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const getAccountNumber = (): string => process.env.AWS_ACCOUNT_NUMBER!;

export const getLoggerName = (): string | undefined => process.env.LOGGER_NAME;

export const getLocalRegion = (): string => {
  return process.env.LOCAL_REGION || DEFAULT_LOCAL_REGION;
};

export const getLocalEndpointDynamoDB = (): string => {
  return process.env.LOCAL_DYNAMODB_ENDPOINT || DEFAULT_LOCAL_URL_DYNAMODB;
};

export const getLocalEndpointStepFunctions = (): string => {
  return process.env.LOCAL_STEPFUNCTIONS_ENDPOINT || DEFAULT_LOCAL_URL_STEPFUNCTIONS;
};

export const getLocalEndpointSns = (): string => {
  return process.env.LOCAL_SNS_ENDPOINT || DEFAULT_LOCAL_URL_SNS;
};

export const getLocalEndpointSes = (): string => {
  return process.env.LOCAL_SES_ENDPOINT || DEFAULT_LOCAL_URL_SES;
};
