import { LogEntity, LogSeverity } from "./domain/entities/log.entity.js";
import { FileLogRepository } from "./infrastructure/repositories/fileLog.repository.js";
import type { LogRepository } from "./domain/repositories/log.repository.js";

class Logger {

    constructor(
        private readonly logRepository: LogRepository,
    ) {

    }

    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        return this.logRepository.getLogs(severityLevel);
    }

    async info(message: string): Promise<void> {
        const log = new LogEntity({ level: LogSeverity.info, message, })
        await this.logRepository.saveLog(log)
    };

    async warn(message: string): Promise<void> {
        const log = new LogEntity({ level: LogSeverity.warn, message, })
        await this.logRepository.saveLog(log)
    };
    async error(message: string): Promise<void> {
        const log = new LogEntity({ level: LogSeverity.error, message, })
        await this.logRepository.saveLog(log)
    };

};

export const logger = new Logger(new FileLogRepository());