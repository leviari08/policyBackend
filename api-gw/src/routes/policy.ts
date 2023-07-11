import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = express.Router();

// For env File 
dotenv.config();

const policyServiceUrl = process.env.POLICY_SERVICE || 'http://localhost:3000'

router.use('/policy', createProxyMiddleware({
    target: policyServiceUrl,
}));
  
export default router;