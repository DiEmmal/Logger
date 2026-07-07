import type { LogEntity, LogSeverity } from "./entities/log.entity.js";
import { FileLogRepository } from "./repositories/fileLog.repository.js";
import type { LogRepository } from "./repositories/log.repository.js";


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