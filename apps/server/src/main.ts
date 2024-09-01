/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import 'reflect-metadata';

import { Logger, NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { RootModule } from '@botomatic/modules';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSchema } from 'graphql/index';
import { join } from 'path';
import fs from 'fs';
import * as process from 'node:process';
import { logger } from 'nx/src/utils/logger';
import { serverEnv } from '@botomatic/env/server';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import loaders from '@medusajs/medusa/dist/loaders';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(RootModule, new FastifyAdapter(), {
    cors: true,
  });

  const port = serverEnv.PORT;

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

const MEDUSA_CONFIG_JS_DIR = __dirname;
const PORT = 9000;

export const medusa = async () => {
  const app = express();

  await loaders({
    directory: MEDUSA_CONFIG_JS_DIR,
    expressApp: app,
    isTest: false,
  });

  app.listen(PORT, () => {
    Logger.log(`🚀 Application is running on: http://localhost:${PORT}/`);
  });
};

export const generateSchema = async ({
  logger: theLogger,
}: {
  logger: NestApplicationOptions['logger'];
}) => {
  logger.log('Generating schema...');
  const app = await NestFactory.create(RootModule, {
    logger: theLogger,
  });
  await app.init(); // Ensure the application is fully initialized

  const { schema } = app.get(GraphQLSchemaHost);
  const schemaSDL = printSchema(schema);

  const at = process.cwd();
  const schemaPath = join(at, 'schema.graphql');
  fs.writeFileSync(schemaPath, schemaSDL);

  await app.close();

  return schemaPath;
};

if (process.argv.includes('--generate-schema')) {
  generateSchema({ logger: ['warn', 'error'] })
    .then((schemaPath) => {
      logger.log(`Schema generated at: ${schemaPath}`);
      process.exit(0);
    })
    .catch((e) => {
      logger.error(e);
      process.exit(1);
    });
} else {
  medusa()
    .then(bootstrap)
    .then(() => {
      if (serverEnv.NODE_ENV === 'production') {
        return;
      }

      generateSchema({ logger: false }).then((schemaPath) => {
        logger.log(`Schema generated at: ${schemaPath}`);
      });
    });
}
