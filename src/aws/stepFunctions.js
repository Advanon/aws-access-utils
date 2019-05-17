const AWS = require('./aws');
const { isOffline, getLocalRegion, getLocalEndpointStepFunctions } = require('../config');

const options = {};
if (isOffline()) {
    options.region = getLocalRegion();
    options.endpoint = getLocalEndpointStepFunctions();
}

const stepFunctions = new AWS.StepFunctions(options);

module.exports = stepFunctions;
