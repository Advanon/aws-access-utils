const { getRegion, getAccountNumber } = require('../config');

const getTopicArn = (topicName) => `arn:aws:sns:${getRegion()}:${getAccountNumber()}:${topicName}`;

module.exports = { getTopicArn };
