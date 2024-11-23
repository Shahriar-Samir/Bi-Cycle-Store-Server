import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();

// middleware configs
app.use(express.json());
app.use(cors());

export default app;
