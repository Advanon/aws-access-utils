const AWS = require('./aws');
const { isOffline, getLocalRegion, getLocalEndpointDynamoDB } = require('../config');

const options = {
    convertEmptyValues: true
};
const optionsLocal = {
    convertEmptyValues: true,
    region: getLocalRegion(),
    endpoint: getLocalEndpointDynamoDB()
};

const dynamodb = {
    doc: isOffline() ? new AWS.DynamoDB.DocumentClient(optionsLocal) : new AWS.DynamoDB.DocumentClient(options),
    raw: isOffline() ? new AWS.DynamoDB(optionsLocal) : new AWS.DynamoDB(options)
};
module.exports = dynamodb;
