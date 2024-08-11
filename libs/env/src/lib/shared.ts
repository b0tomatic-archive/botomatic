import { parseEnv } from 'znv';
import { z } from 'zod';

// TODO: Extend process.env by inferring the schema, as in vite mini-app
export const env = parseEnv(process.env, {
  NODE_ENV: z.union([
    z.literal('development'),
    z.literal('production'),
    z.literal('test'),
  ]),
});
