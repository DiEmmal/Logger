import type { LogEntity, LogSeverity } from "../entities/log.entity.js";

export abstract class LogRepository {
    abstract getLogs(severityLevel: LogSeverity): Promise<LogEntity[]>;
    abstract saveLog(log: LogEntity): Promise<void>;

    // TODO implementar los siguientes metodos
    // abstract getLogsBySeverity(severity: LogSeverity): Promise<LogEntity[]>;
    // abstract deleteOldLogs(): Promise<boolean>;
};