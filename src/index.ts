import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import express, { Express, Request, Response } from 'express';
import { APP_PORT, NODE_ENV, envFileName } from './config';

const app: Express = express();

app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());

app.get('/', (req: Request, res: Response) => {
  res.send(`Application is running in ${NODE_ENV} mode`);
});

app.listen(APP_PORT, () => {
  console.log(`Loading config from ${envFileName} for ${NODE_ENV} mode`);
  console.log(`Application is running, visit http://localhost:${APP_PORT}`);
});
