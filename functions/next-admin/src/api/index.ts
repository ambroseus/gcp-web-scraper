import { dataProvider } from '@/firebase'

export const response = {
  unauthorized: () => new Response('Unauthorized', { status: 401 }),
  notFound: () => new Response('Not Found', { status: 404 }),
}

export const getQuery = (req: Request) => Object.fromEntries(new URL(req.url).searchParams.entries())

export type RequestParams = { params: { slug: string[] } }

export const isV1 = (slug: string[]) => (slug[0] || '').toLowerCase() === 'v1'

export const authApiRequest = async (req: Request): Promise<boolean> => {
  const apiKey = req.headers.get('apiKey')
  const userId = req.headers.get('userId')

  if (!apiKey || !userId) return false

  const user = await dataProvider.getOne('users', { id: userId })

  return apiKey === user?.data?.apiKey
}
