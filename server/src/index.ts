import './env';

import { createServer, Server } from 'http';
import express, { Request, Response } from 'express';
import cors from 'cors';

import pokemon from './pokemon';
import path from 'path';

const app = express();
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use('/pokemon', pokemon);

app.get('/status', (req: Request, res: Response) => res.status(200).send('OK'));

const server: Server = createServer(app);
server.listen(process.env.PORT, () => {
  console.log(server.address());
});
