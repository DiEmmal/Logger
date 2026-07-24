import { FileLogRepository } from "./infrastructure/repositories/fileLog.repository.js";
import type { CreateLoggerOptions } from "./interfaces/createLoggerOptions.interface.js";
import { Logger } from "./logger.js"

export const createLogger = async (options: CreateLoggerOptions = {}): Promise<Logger> => {
    const filesLogRepository = await FileLogRepository.create(options);

    return new Logger(filesLogRepository);
};