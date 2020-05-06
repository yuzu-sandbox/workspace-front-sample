import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'dist/client')))

app.get('/api', (_, res) => {
  res.json({"message": 'api handler'})
})

app.get('*', (_, res) => {
  res.send('any match handle')
})