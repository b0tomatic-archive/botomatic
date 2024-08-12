import { z } from 'zod';
import { clientEnv } from '@botomatic/env/client';

export const envSchema = z.object({}).merge(clientEnv);

const envParsed = envSchema.safeParse(import.meta.env);

if (envParsed.success === false) {
  console.error('❌ Invalid environment variables', envParsed.error.format());

  throw new Error('Invalid environment variables.');
}

export const env = envParsed.data;
