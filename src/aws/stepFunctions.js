const AWS = require('./aws');
const config = require('../config');

const options = {};
if (config.isOffline()) {
    options.region = config.getLocalRegion();
    options.endpoint = config.getLocalEndpointStepFunctions();
}

const stepFunctions = new AWS.StepFunctions(options);

module.exports = stepFunctions;
