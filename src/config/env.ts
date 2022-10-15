import { config } from 'dotenv';

const ENV_FILE_NAME = `.env.${process.env.NODE_ENV || 'development'}`;
config({ path: ENV_FILE_NAME });

const { APP_NAME = 'Express.js REST API', APP_PORT = 3000, NODE_ENV } = process.env;

export default { ENV_FILE_NAME, APP_NAME, APP_PORT, NODE_ENV };
