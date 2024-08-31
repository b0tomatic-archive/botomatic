'use server';

import { z } from 'zod';
import { sharedEnv } from '@botomatic/env/shared';

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
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().min(1).max(65535),
    DB_USER_NAME: z.string(),
    DB_PASSWORD: z.string().optional(),
    DB_NAME: z.string(),
  })
  .merge(sharedEnv)
  // eslint-disable-next-line n/no-process-env
  .parse(process.env);
