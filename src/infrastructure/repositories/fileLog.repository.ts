import fs from 'fs';
import { LogEntity, LogSeverity, } from '../../domain/entities/log.entity.js';
import type { LogRepository } from '../../domain/repositories/log.repository.js';

export class FileLogRepository implements LogRepository {
    path: string;

    private readonly logsFiles = {
        "info": 'AllLogs.log',
        "warn": 'warnLogs.log',
        "error": 'errorLogs.log'
    };

    constructor(path: string = 'logs') {
        this.path = path;
        this.directoryVerification(path);
    };

    async saveLog(log: LogEntity): Promise<void> {
        const filePath = `${this.path}/${this.logsFiles[log.level]}`;
        const logString = `${JSON.stringify(log)}\n`;

        fs.appendFileSync(`${this.path}/${this.logsFiles.info}`, logString);

        if (log.level !== LogSeverity.info) fs.appendFileSync(filePath, logString);
    };

    async getLogs(severityLevel: LogSeverity): Promise<LogEntity[]> {
        const file = `${this.path}/${this.logsFiles[severityLevel]}`;

        const content: LogEntity[] = fs.readFileSync(file, 'utf-8')
            .trim()
            .split('\n')
            .map(log => LogEntity.fromJSON(log))
            .filter(log => log !== undefined);


        return content;
    };

    private directoryVerification(path: string): void {

        const directoryExists = fs.existsSync(path);

        if (!directoryExists) fs.mkdirSync(path);

        for (let logFile of Object.values(this.logsFiles)) {

            if (!fs.existsSync(`${path}/${logFile}`)) fs.writeFileSync(`${path}/${logFile}`, '');

        };
    };

};