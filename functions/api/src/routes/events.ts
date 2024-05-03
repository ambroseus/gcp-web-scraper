import express from 'express'
import { db } from '../db'
import { validate } from '../api/middlewares/validation.middleware'
import { EventsRepository } from '../db/events.repository'
import { eventIdParamRule } from '../api/rules/event.rules'

export const events = express.Router()

events.get('/', async (req, res) => {
  const collection = db.collection('events')
  try {
    const snapshot = await collection.get()
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ general: 'Something went wrong, please try again' })
  }
})

events.get('/:eventId', validate([eventIdParamRule]), async (req, res) => {
  const event = await new EventsRepository().getById(req.params.eventId)

  if (!event) {
    return res.status(404).json()
  }

  return res.status(200).json(event)
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
