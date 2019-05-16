const AWS = require('./aws');
const { isOffline, getLocalEndpointSes } = require('../config');

const ses = isOffline() ? new AWS.SES({ endpoint: getLocalEndpointSes() }) : new AWS.SES();

const sendTemplatedEmail = async (request) => ses.sendTemplatedEmail(request).promise();

const sendEmail = async (request) => ses.sendEmail(request).promise();

module.exports = { sendEmail, sendTemplatedEmail };
