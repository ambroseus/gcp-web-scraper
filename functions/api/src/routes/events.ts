import express from 'express'
import { db } from '../db'

export const events = express.Router()

events.get('/', async (req, res) => {
  const collection = db.collection('events')
  try {
    const snapshot = await collection.get()
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log(data)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ general: 'Something went wrong, please try again' })
  }
})

events.get('/:eventId', (req, res) => {
  res.send(`get event ${req.params.eventId}`)
})

events.post('/', (req, res) => {
  res.send('create event')
})

events.put('/:eventId', (req, res) => {
  res.send(`update event ${req.params.eventId}`)
})

events.delete('/:eventId', (req, res) => {
  res.send(`delete event ${req.params.eventId}`)
})
