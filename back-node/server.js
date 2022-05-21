import express from 'express';

import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js'
 
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/items/', itemRoutes)

app.listen(PORT, () => {
    console.log(`Server running and listening on PORT ${PORT}`.blue)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})