import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 5001;

app.get('/', (req: Request, res: Response) => {
  console.log('zap');
  res.send('typescript server run...');
});

app.listen(port, () => console.log(`app listen on ${port}`));
