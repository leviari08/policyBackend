import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import policyRouter from './routes/policy';
import validationRouter from './routes/validation';
import rateLimit from 'express-rate-limit'

// config 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	max: 10, // Limit each IP to 100 requests per `window` (here, per 1 minute)
    message: "Rate limit exceeded",
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// middleware
app.use(morgan('dev'));
app.use(limiter);

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