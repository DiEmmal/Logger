import { LogSeverity } from "../src/domain/enums/logSeverity.enum.js";
import { logger } from "../src/logger.js";

const logs = await logger.getLogsBySeverity(LogSeverity.error);

console.log(logs);