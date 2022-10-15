import { config } from 'dotenv';
import { name, version, description } from '../../package.json';

const ENV_FILE_NAME = `.env.${process.env.NODE_ENV || 'development'}`;
config({ path: ENV_FILE_NAME });

const APP_NAME = name;
const APP_VERSION = version;
const APP_DESCRIPTION = description;

const { APP_PORT = 3000, NODE_ENV } = process.env;

export default { ENV_FILE_NAME, APP_NAME, APP_VERSION, APP_DESCRIPTION, APP_PORT, NODE_ENV };
