import axios from 'axios'
import { type CloudEventFunction } from '@google-cloud/functions-framework'

const pubUrl = 'https://europe-central2-web-scraper-dev.cloudfunctions.net/web-scraper-pub'

export const handler: CloudEventFunction<any> = async (event) => {
  try {
    const message: any = JSON.parse(Buffer.from(event.data, 'base64').toString())

    const { service, payload, batch, limit = 50 } = message

    if (!Array.isArray(batch)) {
      await axios({
        method: 'post',
        url: service,
        data: payload,
      })
      return
    }

    if (batch.length === 0) {
      return
    }

    const entries = batch.slice(0, limit)
    const [entry, ...nextBatch] = entries

    await axios({
      method: 'post',
      url: service,
      data: { ...payload, ...entry },
    })
    await axios({
      method: 'post',
      url: pubUrl,
      data: { service, payload, batch: nextBatch },
    })
  } catch (e) {
    console.error(e)
  }
}
