import fbAdmin from 'firebase-admin'

import { serviceAccount } from './credentials'

fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://web-configurator-react-default-rtdb.europe-west1.firebasedatabase.app',
})

export const admin = fbAdmin

export const db = admin.firestore()
