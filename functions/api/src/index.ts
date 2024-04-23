import express from 'express'
import bodyParser from 'body-parser'
import { events } from './routes'

const PORT = process.env.PORT || 5555

export const api = express()

api.set('trust proxy', 1)
api.disable('x-powered-by')

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

api.all('/', (req, res) => res.status(200).send('OK'))
api.all('/v1', (req, res) => res.status(200).send('OK'))

api.use('/v1/events', events)

api.listen(3000, () => {
  console.log(`api server listen on ${PORT}`)
  console.log(`----------------------------`)
})
