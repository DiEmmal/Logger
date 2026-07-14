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
  domain/
    entities/
      log.entity.ts
    repositories/
      log.repository.ts
  infrastructure/
    repositories/
      fileLog.repository.ts
  logger.ts
```

## How It Works

The logger stores log entries in different files depending on severity.

Current severity levels:

- `LogSeverity.low`
- `LogSeverity.warn`
- `LogSeverity.error`

The repository writes:

- every log to `allLogs.log`
- medium logs to `warnLogs.log`
- high logs to `errorLogs.log`

## Basic Usage

```ts
import { LogSeverity } from "./domain/entities/log.entity.js";
import { logger } from "./logger.js";

// Create some logs
await logger.info("This is an info log");
await logger.warn("This is a warn log");
await logger.error("This is an error log");

// Display all logs
const logs = await logger.getLogs(LogSeverity.info);
console.log(logs);
```

## Notes

This repository is meant to show my learning process honestly.

It is not presented as a finished or production-ready logger, but as a project that already has a working foundation and will continue to evolve.
