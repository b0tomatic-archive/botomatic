/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// import 'reflect-metadata';

import { Logger, NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { RootModule } from '@botomatic/modules';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
  GraphQLSchemaHost,
} from '@nestjs/graphql';
import { GraphQLSchema, printSchema } from 'graphql/index';
import { join } from 'path';
import fs from 'fs';
import * as process from 'node:process';
import { logger } from 'nx/src/utils/logger';
import { serverEnv } from '@botomatic/env/server';

export async function generateSchema({
  logger: theLogger,
}: {
  logger: NestApplicationOptions['logger'];
}) {
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
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.enableCors();

  const port = serverEnv.PORT;
  await app.listen(port);

  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

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
  bootstrap().then(() => {
    if (serverEnv.NODE_ENV === 'production') {
      return;
    }

    generateSchema({ logger: false }).then((schemaPath) => {
      logger.log(`Schema generated at: ${schemaPath}`);
    });
  });
}
