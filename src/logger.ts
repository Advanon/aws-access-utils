import pino from 'pino';

import { getLoggerName, isOffline } from './config';

const loggerOptions = {
  ...getLoggerName() && { appName: getLoggerName() },
  ...isOffline() && { prettyPrint: { colorize: true } }
};

export default pino(loggerOptions);
