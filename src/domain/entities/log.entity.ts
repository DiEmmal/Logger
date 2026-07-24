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

    static fromJSON(content: string): LogEntity | null {
        try {
            const log = JSON.parse(content);

        if (typeof log !== "object" || log === null) return null;

        if (typeof log.message !== 'string') return null;

        if (!Object.values(LogSeverity).includes(log.level)) return null;

        if (log.timestamp && typeof log.timestamp === 'string') {
            const date = new Date(log.timestamp);
            if (isNaN(date.getTime())) return null;
        } else return null;

        const logEntity: LogEntity = new LogEntity({
            ...log,
            timestamp: new Date(log.timestamp),
        });
        
        return logEntity;

        } catch (error) {
            
         return null;   

        }
    };


};