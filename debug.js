const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()
app.set('trust proxy', 1)
app.disable('x-powered-by')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const httpServer = http.createServer(app)

app.get('/*', (req, res) => {
  console.log(`GET --------------------------------------------------------------------------------`)
  console.log(JSON.stringify(req.path, null, 2))
  console.log(JSON.stringify(req.query, null, 2))
  console.log(`------------------------------------------------------------------------------------`)

  return res.status(200).send('OK')
})

app.post('/*', (req, res) => {
  console.log(`POST -------------------------------------------------------------------------------`)
  console.log(JSON.stringify(req.body, null, 2))
  console.log(`------------------------------------------------------------------------------------`)

  return res.status(200).send('OK')
})

httpServer.listen(3000, () => {
  console.log(`debug server listen on http://localhost:3000`)
})
