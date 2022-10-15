import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';

import { env, swaggerConfig } from './config';
import routes from './routes';

const app: Express = express();

// Middleware
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());

// Routers
const { healthRouter } = routes;
app.use('/health', healthRouter);

// Swagger UI
const { swaggerSpec } = swaggerConfig;
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Application start up
const { APP_NAME, APP_PORT, NODE_ENV, ENV_FILE_NAME, APP_VERSION } = env;
app.listen(APP_PORT, () => {
  console.log(`Starting application: ${APP_NAME}, current version: ${APP_VERSION}`);
  console.log(`Loading config from ${ENV_FILE_NAME} for ${NODE_ENV} mode`);
  console.log(`Application is running, visit http://localhost:${APP_PORT}`);
});
