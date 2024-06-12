import { FirebaseDataProvider, FirebaseAuthProvider, RAFirebaseOptions } from '@dckit/ra-firebase'
import { firebaseConfig as config } from './credentials'

const options: RAFirebaseOptions = {
  logging: true,
  rootRef: '/',
  persistence: 'local',
}

export const dataProvider = FirebaseDataProvider(config, options)
export const authProvider = FirebaseAuthProvider(config, options)
