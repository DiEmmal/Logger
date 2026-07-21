import { logger } from "./index.example.js";

await logger.debug('This is a debug log');
await logger.info('This is an info log');
await logger.warn('This is a warn log');
await logger.error('This is an error log');
await logger.fatal('This is a fatal log');