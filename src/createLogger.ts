import { FileLogRepository } from "./infrastructure/repositories/fileLog.repository.js";
import { Logger } from "./logger.js"

export const createLogger = () => {

    return new Logger(new FileLogRepository());

};