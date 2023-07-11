import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import policyRouter from './routes/policy';
import morgan from 'morgan';

// config 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// logger
app.use(morgan('dev'));

// routes
app.use(policyRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});