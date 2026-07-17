# LoggerTS

LoggerTS is a small TypeScript logger to write and read logs by severity. It is designed as an educational project for learning Node.js, TypeScript, and software architecture.

## Installation

```bash
npm install
```

To run the examples use the next comments:

```bash
npx tsx examples/create-logs.example.ts
npx tsx examples/read-logs.example.ts
```


## Features

- Write logs with multiple severity levels.
- Read logs by severity.
- JSON-based log storage.
- TypeScript support.
- Simple and lightweight.

## Quick start

```ts
import { LogSeverity } from "../src/domain/enums/logSeverity.enum.js";

import { createLogger } from "../src/index.js";

const logger = createLogger();

logger.debug('This is a debug log');
logger.info('This is an info log');
logger.warn('This is a warn log');
logger.error('This is an error log');
logger.fatal('This is a fatal log');

const logs = await logger.getLogsBySeverity(LogSeverity.error);

console.log(logs);
```

## API

### Writing logs

```ts
logger.debug(message);
logger.info(message);
logger.warn(message);
logger.error(message);
logger.fatal(message);
```

### Reading logs

```ts
logger.getLogsBySeverity(severity);
```

Returns an array of `LogEntity`.

### LogEntity

```ts
interface LogEntity {
    message: string;
    level: LogSeverity;
    timestamp: Date;
}
```

## Current Architecture

```
src/
  domain/
    entities/
    enums/
    repositories/
  infrastructure/
    repositories/
  logger.ts
examples/
logs/
```
## Notes

This repository is meant to show my learning process honestly.

It is not presented as a finished or production-ready logger, but as a project that already has a working foundation and will continue to evolve.
