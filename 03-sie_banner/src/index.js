import express from 'express';
import Redis from 'ioredis';

const app = express();
app.use(express.json());

// redis client
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379'); // agr env me nahi hai tu docker compose up se connect hoga ye uska urlhai

// banner ki key set karna 
const BANNER_KEY = 'app:banner'; // redis me ye standard hai app:banner , matlab app ka banner hai