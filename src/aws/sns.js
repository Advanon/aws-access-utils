const AWS = require('./aws');
const { isOffline, getLocalRegion, getLocalEndpointSns, getRegion } = require('../config');

const options = {
    region: getRegion(),
    apiVersion: '2010-03-31'
};

const optionsLocal = {
    region: getLocalRegion(),
    endpoint: getLocalEndpointSns(),
};

const sns = new AWS.SNS(isOffline() ? optionsLocal : options);

module.exports = sns;
