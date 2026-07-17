import fs from 'fs';
import { LogEntity, } from '../../domain/entities/log.entity.js';
import type { LogRepository } from '../../domain/repositories/log.repository.js';
import { LogSeverity } from '../../domain/enums/logSeverity.enum.js';

export class FileLogRepository implements LogRepository {
    path: string;

    private readonly logsFiles = {
        "all": "allLogs.log",
        "debug": 'debugLogs.log',
        "info": 'infoLogs.log',
        "warn": 'warnLogs.log',
        "error": 'errorLogs.log',
        "fatal": 'fatalLogs.log',
    };

    constructor(path: string = 'logs') {
        this.path = path;
        this.directoryVerification(path);
    };

    async readLogs(severity?: LogSeverity): Promise<LogEntity[]> {
        if (severity) return this.transformLogs(severity);
        else return this.transformLogs();
    };

    private async transformLogs(severity?: LogSeverity): Promise<LogEntity[]>{
        let path: string;
        if(severity) path = `${this.path}/${this.logsFiles[severity]}`;
        else path = `${this.path}/${this.logsFiles.all}`
            const logs = fs.readFileSync(path, 'utf-8')
                .trim()
                .split("\n")
                .map(log => LogEntity.fromJSON(log))
                .filter(log => log instanceof LogEntity)
            return logs;
    };

    async saveLog(log: LogEntity): Promise<void> {
        const filePath = `${this.path}/${this.logsFiles[log.level]}`;
        const logString = `${JSON.stringify(log)}\n`;

        fs.appendFileSync(`${this.path}/${this.logsFiles.all}`, logString);

        fs.appendFileSync(filePath, logString);
    };

    private directoryVerification(path: string): void {

        const directoryExists = fs.existsSync(path);

        if (!directoryExists) fs.mkdirSync(path);

        for (let logFile of Object.values(this.logsFiles)) {

            if (!fs.existsSync(`${path}/${logFile}`)) fs.writeFileSync(`${path}/${logFile}`, '');

        };
    };

};