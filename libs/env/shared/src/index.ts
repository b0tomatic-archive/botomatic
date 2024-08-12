import { z } from 'zod';

const DEFAULT_HOST = 'localhost' as const;

export const sharedEnv = z.object({
  NX_PUBLIC_HOST: z
    .union([z.literal(DEFAULT_HOST), z.string().url()])
    .default(DEFAULT_HOST),
});
