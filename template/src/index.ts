import { type HttpFunction } from '@google-cloud/functions-framework'

export const handler: HttpFunction = async (req, res) => {
  if (req.method === 'GET') {
    try {
      res.send('OK')
    } catch (e) {
      console.error(e)
      res.send('ERROR')
    }
    return
  }

  if (req.method !== 'POST') {
    res.send('ERROR')
    return
  }
  console.log(`req.body:`, req.body)
  res.send(req.body)
}
