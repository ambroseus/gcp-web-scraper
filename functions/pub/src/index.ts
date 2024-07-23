import { type HttpFunction } from '@google-cloud/functions-framework'
import { PubSub } from '@google-cloud/pubsub'

const HTTP_NO_METHOD_SUPPORTED = 405

// https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper

export const handler: HttpFunction = async (req, res) => {
  if (req.method === 'GET') {
    res.send('OK')
    return
  }

  if (req.method !== 'POST') {
    res.status(HTTP_NO_METHOD_SUPPORTED).send('ERROR')
    res.send('ERROR')
    return
  }
  console.log(`req.body:`, req.body)

  try {
    const pubSubClient = new PubSub()
    const data = Buffer.from(JSON.stringify(req.body))
    const messageId = await pubSubClient.topic('test-topic').publishMessage({ data })
    console.log(`Message ${messageId} published.`)
    res.send('OK')
  } catch (e) {
    console.error(e)
    res.send('ERROR')
  }
}
