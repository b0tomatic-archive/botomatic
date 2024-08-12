'use client';

import { z } from 'zod';
import { sharedEnv } from '@botomatic/env/shared';

export const clientEnv = z
  .object({
    BASE_URL: z.string(),
    MODE: z.string(),
    DEV: z.boolean(),
    PROD: z.boolean(),
    SSR: z.boolean(),
  })
  .merge(sharedEnv);
