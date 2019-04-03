const AWS = require('./aws');
const config = require('../config');

const options = {
    region: config.getRegion(),
    apiVersion: '2010-03-31'
};
const optionsLocal = {
    region: config.getLocalRegion(),
    endpoint: config.getLocalEndpointSns(),
};

const sns = new AWS.SNS(config.isOffline() ? optionsLocal : options);

module.exports = sns;
