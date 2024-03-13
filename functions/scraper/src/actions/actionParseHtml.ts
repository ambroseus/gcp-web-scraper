import { renderPage } from '../render'
import { getNormalizedUrl } from '../utils'

export async function actionParseHtml({ browser, url, waitForSelector = '', options = {} }): Promise<any> {
  const response = await renderPage({
    browser,
    url: getNormalizedUrl({ url, options }),
    waitForSelector,
    options,
  })

  return response
}
