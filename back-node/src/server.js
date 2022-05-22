import express from 'express';

import itemRoutes from './routes/itemRoutes.js'
import {PORT} from './config/config.js'

const app = express();

app.use('/api/items/', itemRoutes)

app.listen(PORT, () => {
    console.log(`Server running and listening on PORT ${PORT}`)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})