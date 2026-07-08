export enum LogSeverity {
    low = 'logs',
    medium = 'warns',
    high = 'errors'
};

export interface Log {
    message: string;
    level: LogSeverity;
    timestamp?: Date;
}


export class LogEntity implements Log {
    message: string;
    level: LogSeverity;
    timestamp?: Date;

    constructor(log: Log) {
        this.message = log.message;
        this.level = log.level;
        this.timestamp = log.timestamp ?? new Date();
    }

    static fromJSON(content: string): LogEntity | void {
        if (!content || content === '') return;

        const log: LogEntity = JSON.parse(content);

        if (
            !log.message ||
            !log.level ||
            !log.timestamp
        ) return;

        const logEntity: LogEntity = new LogEntity(log);


        return logEntity;
    }
};
