import axios from 'axios'
import { type HttpFunction } from '@google-cloud/functions-framework'

export const batcher: HttpFunction = async (req, res) => {
  if (req.method === 'GET') {
    res.send('OK')
    return
  }

  if (req.method !== 'POST') {
    res.send('ERROR')
    return
  }
  console.log(`req.body:`, req.body)

  let responses = []
  try {
    const { service = '', batch = [], limit = 100, timeout = 10000, payload = {}, concurrent = false } = req.body

    const request = (entry) => ({
      method: 'POST',
      url: service,

      data: { ...payload, ...entry },
      timeout,
    })

    const entries = batch.slice(0, limit)

    if (concurrent) {
      const result = await Promise.allSettled(entries.map((entry) => axios(request(entry))))
      responses = result.map((entry) =>
        entry.status === 'fulfilled'
          ? { code: entry.value.status, status: entry.value.statusText }
          : { code: 500, status: entry.reason }
      )
    } else {
      for (const entry of entries) {
        const response = await axios(request(entry))
        responses.push({ code: response.status, status: response.statusText })
      }
    }

    console.log(`responses:`, responses)
    res.send(responses)
  } catch (e) {
    console.error(e)
    res.send('ERROR')
  }
}
