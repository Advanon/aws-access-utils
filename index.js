module.exports = {
    logger: require('./src/logger'),
    httpUtils: require('./src/httpUtils'),
    config: require('./src/config'),
    aws: require('./src/aws/aws'),
    arn: require('./src/aws/arn'),
    ssm: require('./src/aws/ssm'),
    dynamoDb: require('./src/aws/dynamodb'),
    ses: require('./src/aws/ses'),
    sns: require('./src/aws/sns'),
    stepFunctions: require('./src/aws/stepFunctions')
};
