import { z } from 'zod';

process.loadEnvFile();

const { NODE_ENV, PORT } = process.env;

const envConfig = z.object({
  nodeEnv: z.enum(['development', 'production']),
  port: z.string().min(4).transform(Number),
});

export const { nodeEnv, port } = await envConfig.parseAsync({
  nodeEnv: NODE_ENV,
  port: PORT,
});
