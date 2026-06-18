import express from 'express';
import Redis from 'ioredis';
import mongoose from 'mongoose';

const app = express();

// redis client
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379'); // agr env me nahi hai tu docker compose up se connect hoga ye uska urlhai 

app.get('/redis', async (req, res) => {
    const reply = await redis.ping();
    res.json({ message: reply });

})

app.get('/mongo', async (req, res) => {
     const url = process.env.MONGO_URL || 'mongodb://localhost:27017/redis_mongo_db'; // agr env me nahi hai tu docker compose up se connect hoga ye uska urlhai
     if (mongoose.connection.readyState === 0) {
        await mongoose.connect(url);
     }
     res.json({ message: 'Connected to MongoDB', database: mongoose.connection.name });
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})