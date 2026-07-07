# LoggerTS

A simple logger built with Node.js and TypeScript as a backend learning project.

This project was created for study purposes and is inspired in part by ideas explored while following Fernando Herrera's Node.js course. The goal is not only to make a logger work, but also to practice cleaner structure, stronger typing, and progressive architectural thinking.

## Project Goal

This repository is part of my backend learning process.

The current focus is to understand and practice:

## Current Architecture

The logger is organized as a small independent module:

```text
src/
  Logger/
    entities/
      log.entity.ts
    repository/
      log.repository.ts
      fileLog.repository.ts
    logger.ts
  logger.demo.ts
  app.ts
```

### Main parts

- `LogEntity`: represents a log entry.
- `LogRepository`: defines the persistence contract.
- `FileLogRepository`: stores and retrieves logs from files.
- `Logger`: coordinates access to the repository.
- `logger.demo.ts`: shows a simple demo of how the module can be used.

## How It Works

The logger stores log entries in different files depending on severity.

Current severity levels:

- `LogSeverity.low`
- `LogSeverity.medium`
- `LogSeverity.high`

The repository writes:

- every log to `allLogs.log`
- medium logs to `warnLogs.log`
- high logs to `errorLogs.log`

## Basic Usage

```ts
import { LogEntity, LogSeverity } from "./Logger/entities/log.entity.js";
import { Logger } from "./Logger/logger.js";
import { FileLogRepository } from "./Logger/repository/fileLog.repository.js";

const logger = new Logger(new FileLogRepository());

const log = new LogEntity("Database connection failed", LogSeverity.high);

await logger.saveLog(log);

const errorLogs = await logger.getLogs(LogSeverity.high);
console.log(errorLogs);
```

## Demo

The project includes a demo file at `src/logger.demo.ts`.

To run the project:

```bash
npm install
npm run build
node dist/logger.demo.js
```

This will:

1. Create the log storage directory if it does not exist.
2. Save a few demo logs.
3. Read stored error logs.
4. Print all logs in allLogs.log.


## Notes

This repository is meant to show my learning process honestly.

It is not presented as a finished or production-ready logger, but as a project that already has a working foundation and will continue to evolve.
