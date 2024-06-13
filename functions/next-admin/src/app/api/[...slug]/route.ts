import { dataProvider, authApiRequest, resUnauthorized } from '@/firebase'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req: Request) {
  if (!(await authApiRequest(req))) return resUnauthorized()

  const list = await dataProvider.getList('events', {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'ASC' },
    filter: {},
  })
  return Response.json(list)
}
