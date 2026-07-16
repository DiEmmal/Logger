import { LogSeverity } from "../enums/logSeverity.enum.js";

export class LogEntity {
    message: string;
    level: LogSeverity;
    timestamp?: Date;

    constructor(log: LogEntity) {
        this.message = log.message;
        this.level = log.level;
        this.timestamp = log.timestamp ?? new Date();
    };

    static fromJSON(content: string): LogEntity | void{
        const log = JSON.parse(content);

        if (typeof log !== "object" || log === null) return;

        if (typeof log.message !== 'string') return;

        if (!Object.values(LogSeverity).includes(log.level)) return;

        if (log.timestamp && typeof log.timestamp === 'string') {
            const date = new Date(log.timestamp);
            if (isNaN(date.getTime())) return;
        } else return;

        const logEntity: LogEntity = new LogEntity(log);
        return logEntity;
    };


};