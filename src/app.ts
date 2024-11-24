import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bicycleRouter from './modules/bicycle/bicycle.router';
import orderRouter from './modules/order/order.router';
const app: Application = express();

// middleware configs
app.use(express.json());
app.use(cors());

// routers
app.use('/api/products', bicycleRouter);
app.use('/api/orders', orderRouter);

// home route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Bi-Cycle-Store homepage',
  });
});

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof Error) {
    res.status(400).json({
      message: err.message,
      success: false,
      error: err,
      stack: err.stack,
    });
  } else {
    res.status(400).json({
      message: err,
      success: false,
      error: err,
    });
  }
});

export default app;
