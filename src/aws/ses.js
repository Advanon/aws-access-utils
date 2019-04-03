const AWS = require('./aws');
const config = require('../config');

const ses = config.isOffline() ? new AWS.SES({endpoint: config.getLocalEndpointSes()}) : new AWS.SES();

const sendTemplatedEmail = async (request) => ses.sendTemplatedEmail(request).promise();

const sendEmail = async (request) => ses.sendEmail(request).promise();

module.exports = {sendEmail, sendTemplatedEmail};
