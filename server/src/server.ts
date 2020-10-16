import express, {Request, Response} from 'express'
import path from 'path'

import cors from 'cors'

import 'express-async-errors'

import './database/connection'

import errorHandler from './errors/handler'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333, () => {
    console.log('Server running at http://localhost:3333 ✔')
}
)