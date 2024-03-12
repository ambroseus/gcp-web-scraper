import { type HttpFunction } from '@google-cloud/functions-framework'
import { google } from 'googleapis'
import { credentials } from '../../credentials'

export const sheetwriter: HttpFunction = async (req, res) => {
  if (req.method === 'GET') {
    res.send('OK')
    return
  }

  if (req.method !== 'POST') {
    res.send('ERROR')
    return
  }
  console.log(`req.body:`, req.body)

  const {
    url = '',
    status = '',
    title = '',
    kind = '',
    date = '',
    country = '',
    location = '',
    description = '',
    image = '',
  } = req.body.data || {}
  const row = [url, status, title, kind, date, country, location, description, image]

  const auth = new google.auth.JWT(credentials.client_email, null, credentials.private_key, [
    'https://www.googleapis.com/auth/spreadsheets',
  ])
  const key = credentials.api_key
  const spreadsheetId = '1u0n5-4_ERnDYNyEwI6A_rwBX9EWNvvsB0gfAWqzEYO4'
  const range = 'eventalways!A2'

  const request = {
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      majorDimension: 'ROWS',
      values: [row],
    },
    auth,
    key,
  }
  const sheets = google.sheets({ version: 'v4' })

  try {
    const response = (await sheets.spreadsheets.values.append(request)).data
    console.log(`response:`, response)
    res.send(response)
  } catch (err) {
    console.error(err)
    res.send('ERROR')
  }
}
