import express from 'express'
import bodyParser from 'body-parser'
import SetUpRoutes from './routes/index'

const app = express()

app.use(bodyParser.json())
SetUpRoutes(app)

export default app