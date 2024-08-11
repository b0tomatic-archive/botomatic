import { parseEnv, z } from 'znv';

export const env = parseEnv(import.meta.env, {
  VITE_DOMAIN_NAME: z.string(),
  TEST: z.string(),
});
