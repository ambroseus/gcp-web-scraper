import { dataProvider } from '@/firebase'

import { authApiRequest, response, RequestParams, isV1, getQuery } from '@/api'

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req: Request, { params: { slug } }: RequestParams) {
  if (!(await authApiRequest(req))) return response.unauthorized()

  if (!isV1(slug)) return response.notFound()

  const query = getQuery(req)
  console.log(`GET > query:`, query)

  const list = await dataProvider.getList('events', {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'ASC' },
    filter: {},
  })
  return Response.json(list)
}
