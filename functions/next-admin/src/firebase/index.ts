import { FirebaseDataProvider, FirebaseAuthProvider, RAFirebaseOptions } from '@dckit/ra-firebase'
import { firebaseConfig as config } from './credentials'

const options: RAFirebaseOptions = {
  logging: false,
  rootRef: '/',
  persistence: 'local',
}

export const dataProvider = FirebaseDataProvider(config, options)
export const authProvider = FirebaseAuthProvider(config, options)

export const resUnauthorized = () => new Response('Unauthorized', { status: 401 })

export const authApiRequest = async (req: Request): Promise<boolean> => {
  const apiKey = req.headers.get('api-key')
  const user = req.headers.get('user')
  if (!apiKey || !user) return false

  const api = await dataProvider.getOne('api', { id: user })

  return apiKey === api?.data?.key
}
