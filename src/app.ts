import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bicycleRouter from './modules/bicycle/bicycle.router';
const app: Application = express();

// middleware configs
app.use(express.json());
app.use(cors());

// routers
app.use('/api/products', bicycleRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Bi-Cycle-Store homepage',
  });
});

export default app;
