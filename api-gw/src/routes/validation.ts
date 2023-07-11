import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = express.Router();

dotenv.config();

const validationServiceUrl = process.env.VALIDATION_SERVICE || 'http://localhost:3002'

router.use('/policy', createProxyMiddleware({
    target: validationServiceUrl,
}));

export default router;