const AWS = require('./aws');
const config = require('../config');

const options = {
    convertEmptyValues: true
};
const optionsLocal = {
    convertEmptyValues: true,
    region: config.getLocalRegion(),
    endpoint: config.getLocalEndpointDynamoDB()
};

const dynamodb = {
    doc: config.isOffline() ? new AWS.DynamoDB.DocumentClient(optionsLocal) : new AWS.DynamoDB.DocumentClient(options),
    raw: config.isOffline() ? new AWS.DynamoDB(optionsLocal) : new AWS.DynamoDB(options)
};
module.exports = dynamodb;
