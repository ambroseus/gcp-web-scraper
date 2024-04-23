import fbAdmin, { ServiceAccount } from 'firebase-admin'

import serviceAccount from './serviceAccountKey.json'

fbAdmin.initializeApp({
  credential: fbAdmin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://web-configurator-react-default-rtdb.europe-west1.firebasedatabase.app',
})

export const admin = fbAdmin

export const db = admin.firestore()
