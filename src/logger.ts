import type { LogEntity, LogSeverity } from "./domain/entities/log.entity.js";
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

    async saveLog(log: LogEntity): Promise<void> {
        return this.logRepository.saveLog(log);
    }

};

export const logger = new Logger(new FileLogRepository());