import { createLogger } from "../src/index.js";

const logger = createLogger();

logger.debug('This is a debug log');
logger.info('This is an info log');
logger.warn('This is a warn log');
logger.error('This is an error log');
logger.fatal('This is a fatal log');