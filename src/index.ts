import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Application is running');
});

app.listen(port, () => {
  console.log('TODO: Add env here');
  console.log(`Application is running, visit http://localhost:${port}`);
});
