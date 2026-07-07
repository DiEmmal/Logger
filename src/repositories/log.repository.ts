import type { LogEntity, LogSeverity } from "../entities/log.entity.js";

export abstract class LogRepository {
    abstract getLogs(severityLevel: LogSeverity): Promise<LogEntity[]>;
    abstract saveLog(log: LogEntity): Promise<void>
};