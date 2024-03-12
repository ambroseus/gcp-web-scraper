import { renderPage } from '../../../render'
import { getNormalizedUrl } from '../../../utils'

export async function actionParseHtml({ url, waitForSelector = '', options = {} }): Promise<any> {
  const response = await renderPage({
    url: getNormalizedUrl({ url, options }),
    waitForSelector,
    options,
  })

  return response
}
