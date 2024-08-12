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
    PORT: z.coerce.number().default(3000),
    IS_CI: z.coerce.boolean(),
  })
  .merge(sharedEnv)
  // eslint-disable-next-line n/no-process-env
  .parse(process.env);
