import express from 'express'
import cors from 'cors'

import productRoutes from './routes/product.js'
import userRoutes from './routes/user.js'
import authenticationRoute from './routes/authentication.js'
import recoveryRoutes from './routes/recovery.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/users', async (req, res) => {
    console.log(req.body);
    return res.json("opa")
})


app.use(productRoutes)
app.use(userRoutes)
app.use(authenticationRoute)
app.use(recoveryRoutes)

export default app
