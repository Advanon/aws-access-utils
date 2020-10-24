const DEFAULT_LOCAL_REGION = 'us-east-1';

const DEFAULT_LOCAL_ENDPOINT = process.env.LOCALSTACK_HOSTNAME ?
  `http://${process.env.LOCALSTACK_HOSTNAME}:4566` :
  'http://localhost:4566';

export const isOffline = (): boolean => !!process.env.IS_OFFLINE;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const getRegion = (): string => process.env.AWS_REGION!;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const getAccountNumber = (): string => process.env.AWS_ACCOUNT_NUMBER!;

export const getLoggerName = (): string | undefined => process.env.LOGGER_NAME;

export const getLocalRegion = (): string => process.env.LOCAL_REGION || DEFAULT_LOCAL_REGION;

export const getLocalEndpointDynamoDB = (): string =>
  process.env.LOCAL_DYNAMODB_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;

export const getLocalEndpointStepFunctions = (): string =>
  process.env.LOCAL_STEPFUNCTIONS_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;

export const getLocalEndpointSns = (): string => process.env.LOCAL_SNS_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;

export const getLocalEndpointSqs = (): string => process.env.LOCAL_SQS_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;

export const getLocalEndpointSes = (): string => process.env.LOCAL_SES_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;

export const getLocalEndpointSsm = (): string => process.env.LOCAL_SSM_ENDPOINT || DEFAULT_LOCAL_ENDPOINT;
