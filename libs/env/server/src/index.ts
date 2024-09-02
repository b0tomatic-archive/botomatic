/* eslint-disable n/no-process-env */
'use server';
import { every, pick } from 'lodash';
import { z } from 'zod';
import { sharedEnv } from '@botomatic/env/shared';

const dbEnv = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.number().min(1).max(65535).optional(),
  DB_USER_NAME: z.string(),
  DB_PASSWORD: z.string().optional(),
  DB_NAME: z.string(),
});

const IS_CI = process.env['IS_CI'] === 'true';

export const serverEnv = z
  .object({
    NODE_ENV: z.union([
      z.literal('development'),
      z.literal('production'),
      z.literal('test'),
    ]),
    PORT: z.coerce.number().min(1).max(65535).default(3000),
    FASTIFY_PORT: z.coerce.number().min(1).max(65535).default(3001),
    IS_CI: z.coerce.boolean(),
  })
  .merge(dbEnv)
  .merge(sharedEnv)
  .partial(
    IS_CI
      ? {
          DB_HOST: true,
          DB_USER_NAME: true,
          DB_NAME: true,
        }
      : {}
  )
  .parse(process.env);
