const pino = require('pino');
const { getLoggerName } = require('./config');

const loggerOptions = {};
if (getLoggerName()) {
    loggerOptions.base = {
        appName: getLoggerName()
    };
}

const logger = pino(loggerOptions);

module.exports = logger;
