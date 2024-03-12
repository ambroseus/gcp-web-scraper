import { defaultDenyResources } from '../config'
import { ID } from '../ids'

// https://hackernoon.com/tips-and-tricks-for-web-scraping-with-puppeteer-ed391a63d952

export function onRequest(req, options = {}) {
  const denyResources = options[ID.optDenyResources] || defaultDenyResources || []
  const resourceType = req.resourceType()

  const method = denyResources.includes(resourceType) ? 'abort' : 'continue'

  req[method]()
}
