import express from 'express'
import cors from 'cors'

import productRoutes from './routes/product.js'
import userRoutes from './routes/user.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(productRoutes)
app.use(userRoutes)

export default app;