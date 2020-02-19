const pino = require('pino');
const { getLoggerName, isOffline } = require('./config');

const loggerOptions = {};
if (getLoggerName()) {
    loggerOptions.base = {
        appName: getLoggerName()
    };
}

if (isOffline()) {
    loggerOptions.prettyPrint = { colorize: true };
}

module.exports = pino(loggerOptions);
