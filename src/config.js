const DEFAULT_LOCAL_REGION = 'us-east-1';
const DEFAULT_LOCAL_URL_DYNAMODB = 'http://localhost:4569';
const DEFAULT_LOCAL_URL_SNS = 'http://localhost:4575';
const DEFAULT_LOCAL_URL_STEPFUNCTIONS = 'http://localhost:4585';
const DEFAULT_LOCAL_URL_SES = 'http://localhost:4579';

const isOffline = () => process.env.IS_OFFLINE;

const getRegion = () => process.env.AWS_REGION;

const getAccountNumber = () => process.env.AWS_ACCOUNT_NUMBER;

const getLoggerName = () => process.env.LOGGER_NAME;

const getLocalRegion = () => {
    return process.env.LOCAL_REGION || DEFAULT_LOCAL_REGION;
};

const getLocalEndpointDynamoDB = () => {
    return process.env.LOCAL_DYNAMODB_ENDPOINT || DEFAULT_LOCAL_URL_DYNAMODB;
};

const getLocalEndpointStepFunctions = () => {
    return process.env.LOCAL_STEPFUNCTIONS_ENDPOINT || DEFAULT_LOCAL_URL_STEPFUNCTIONS;
};

const getLocalEndpointSns = () => {
    return process.env.LOCAL_SNS_ENDPOINT || DEFAULT_LOCAL_URL_SNS;
};

const getLocalEndpointSes = () => {
    return process.env.LOCAL_SES_ENDPOINT || DEFAULT_LOCAL_URL_SES;
};

module.exports = {
    isOffline,
    getRegion,
    getAccountNumber,
    getLocalRegion,
    getLocalEndpointDynamoDB,
    getLocalEndpointSns,
    getLocalEndpointStepFunctions,
    getLocalEndpointSes,
    getLoggerName
};
