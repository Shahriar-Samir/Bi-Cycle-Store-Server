import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// middleware configs
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Bi-Cycle-Store homepage',
  });
});

export default app;
