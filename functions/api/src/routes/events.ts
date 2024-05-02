import express from 'express'
import { db } from '../db'
import { param, validationResult } from 'express-validator'

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

events.get('/:eventId', param('eventId').notEmpty().isString(), async (req, res) => {
  // TODO: add middleware to abstract away validation
  const validationErrors = validationResult(req)
  if (!validationErrors.isEmpty()) {
    return res.status(422).json({ errors: validationErrors.array() })
  }

  // TODO: abstract away (to repository?)
  const event = await db.collection('events').doc(req.params.eventId).get()

  if (!event.exists) {
    return res.status(404).json({ error: 'Event not found' }) // TODO: consider if I need a message
  }

  return res.status(200).json({
    // TODO: refactor to .response class
    id: event.id,
    ...event.data(),
  })
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
