import { config } from 'dotenv';

export const envFileName = `.env.${process.env.NODE_ENV || 'development'}`;
config({ path: envFileName });

export const { APP_PORT = 3000, NODE_ENV } = process.env;
