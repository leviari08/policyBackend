import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import policyRouter from './routes/policy';
import validationRouter from './routes/validation';

// config 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// logger
app.use(morgan('dev'));

// routes
app.use(policyRouter);
app.use(validationRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});