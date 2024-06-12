import { dataProvider } from '@/firebase'

export const dynamic = 'force-dynamic' // defaults to auto

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const list = await dataProvider.getList('events', {
    pagination: { page: 1, perPage: 10 },
    sort: { field: 'id', order: 'ASC' },
    filter: {},
  })
  return Response.json(list)
}
