import { type HttpFunction } from '@google-cloud/functions-framework'
import { parseHtml } from './actions'
import { launchBrowser } from './render'

let browser

export const handler: HttpFunction = async (req, res) => {
  if (req.method === 'GET') {
    try {
      await launchBrowser()
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

  try {
    if (!browser) {
      browser = await launchBrowser()
    }
    const response = await parseHtml(req, browser)
    console.log(`response:`, response)
    res.send(response)
  } catch (e) {
    console.error(e)
    res.send('ERROR')
  }
}
