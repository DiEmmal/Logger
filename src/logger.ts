import { LogEntity } from "./domain/entities/log.entity.js";
import { FileLogRepository } from "./infrastructure/repositories/fileLog.repository.js";
import type { LogRepository } from "./domain/repositories/log.repository.js";
import { LogSeverity } from "./domain/enums/logSeverity.enum.js";

class Logger {

    constructor(
        private readonly logRepository: LogRepository,
    ) {

    };

    async getLogsBySeverity(severityLevel: LogSeverity): Promise<LogEntity[]> {
        return this.logRepository.readLogs(severityLevel);
    };
    
    // async getAllLogs(): Promise<LogEntity[]> {
    //     return this.getLogsBySeverity();
    // };

    private async saveLog(message: string, level: LogSeverity) {
        const log = new LogEntity({ level, message })
        return this.logRepository.saveLog(log)
    };

    async debug(message: string): Promise<void> {
        return this.saveLog(message, LogSeverity.debug,);
    };

    async info(message: string): Promise<void> {
        return this.saveLog(message, LogSeverity.info,);
    };

    async warn(message: string): Promise<void> {
        return this.saveLog(message, LogSeverity.warn,);
    };

    async error(message: string): Promise<void> {
        return this.saveLog(message, LogSeverity.error,);
    };

    async fatal(message: string): Promise<void> {
        return this.saveLog(message, LogSeverity.fatal,);
    };
};

export const logger = new Logger(new FileLogRepository());