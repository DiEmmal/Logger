export enum LogSeverity {
    low = 'logs',
    medium = 'warns',
    high = 'errors'
};

export interface Log {
    message: string;
    level: LogSeverity;
    timestamp: Date;
}


export class LogEntity implements Log {
    message: string;
    level: LogSeverity;
    timestamp: Date;

    constructor(message: string, level: LogSeverity) {
        this.message = message;
        this.level = level;
        this.timestamp = new Date();
    }

    static fromJSON(content: string): LogEntity | void {
        if (!content || content === '') return;

        const log: LogEntity = JSON.parse(content);

        if (
            !log.message ||
            !log.level ||
            !log.timestamp
        ) return;

        

        const logEntity = new LogEntity(log.message, log.level);
        logEntity.timestamp = new Date(log.timestamp);


        return logEntity;
    }
};
