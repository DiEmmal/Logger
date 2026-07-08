import { LogEntity, LogSeverity } from "./entities/log.entity.js";
import { logger } from "./logger.js";

const logsFunctions = {
    logLow: () => {
        setInterval(async () => {

            logger.saveLog(new LogEntity({"message": "This is a low severity log", "level": LogSeverity.low}));

        }, 5000);
    },
    logMedium: () => {
        setInterval(async () => {
            logger.saveLog(new LogEntity({"message": "This is a medium severity log", "level": LogSeverity.medium}));
        }, 7000);
    },
    logHigh: () => {
        setInterval(async () => {
            logger.saveLog(new LogEntity({"message": "This is a high severity log", "level": LogSeverity.high}));
        }, 10000);
    },
}

logsFunctions.logLow();
logsFunctions.logMedium();
logsFunctions.logHigh();

setTimeout(async () => {
    const lowLogs = await logger.getLogs(LogSeverity.low);
    console.log("All logs:", lowLogs);
}, 20000);