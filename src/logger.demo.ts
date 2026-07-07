import { LogEntity, LogSeverity } from "./entities/log.entity.js";
import { logger } from "./logger.js";

const logs = {
    log1: new LogEntity("This is a low severity log message", LogSeverity.low),
    log2: new LogEntity("This is a medium severity log message", LogSeverity.medium),
    log3: new LogEntity("This is a high severity log message", LogSeverity.high),
}

const logsFunctions = {
    logLow: () => {
        setInterval(async () => {

            logger.saveLog(logs.log1);

        }, 5000);
    },
    logMedium: () => {
        setInterval(async () => {
            logger.saveLog(logs.log2);
        }, 7000);
    },
    logHigh: () => {
        setInterval(async () => {
            logger.saveLog(logs.log3);
        }, 10000);
    },
}

logsFunctions.logLow();
logsFunctions.logMedium();
logsFunctions.logHigh();

setTimeout(async () => {
    const lowLogs = await logger.getLogs(LogSeverity.low);
    console.log("Low Severity Logs:", lowLogs);
}, 20000);