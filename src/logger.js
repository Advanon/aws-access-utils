const pino = require('pino');
const {getLoggerName} = require('./config');

const loggerOptions = {};
if (getLoggerName()) {
    loggerOptions.name = getLoggerName();
}

const logger = pino(loggerOptions);

module.exports = logger;
