import { LogSeverity } from "../src/domain/enums/logSeverity.enum.js";

import { createLogger } from "../src/index.js";

const logger = createLogger();

const logs = await logger.getLogsBySeverity(LogSeverity.error);

console.log(logs);