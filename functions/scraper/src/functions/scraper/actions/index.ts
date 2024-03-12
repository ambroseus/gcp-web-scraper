import { actionParseHtml } from './actionParseHtml'
import { actionPostProcess } from './actionPostProcess'
import { actionCallService } from './actionCallService'
import { isObj } from '../../../utils'

export async function parseHtml(req) {
  const request: any = req.body || {}

  try {
    const { url = '', waitForSelector, postprocess, options = {} } = request

    if (!isObj(options)) throw new Error("'options' is not an object")

    let response: any = {}

    response = await actionParseHtml({
      url,
      waitForSelector,
      options,
    })

    if (postprocess) {
      if (!isObj(postprocess)) throw new Error("'postprocess' is not an object")

      const htmlToPostProcess = response.html || ''

      const { html: outputHtml, output } = actionPostProcess({
        ...postprocess,
        url: response.url || url,
        html: htmlToPostProcess,
        options,
      })

      if (!postprocess.outputHtml) {
        delete response['html']
      }
      if (outputHtml && postprocess.outputHtml) {
        response.html = outputHtml
      }
      if (output) response.output = output
    }

    response.status = response.status || 'OK'
    response.code = response.code || 200

    request.html = '.....'
    if (postprocess && postprocess.handler) postprocess.handler = '.....'
    // response.request = request

    if (response.code === 200 && postprocess.onSuccess?.service && response.output) {
      const serviceResponse = await actionCallService({
        url: postprocess.onSuccess.service,
        data: { ...postprocess.onSuccess.payload, ...response.output },
        timeout: postprocess.onSuccess.timeout || 10000,
      })
      response.onSuccessResponse = {
        code: serviceResponse.status,
        status: serviceResponse.statusText,
        result: serviceResponse.data,
      }
    }

    return response
  } catch (e) {
    const error = e.message || e
    console.error(`ERROR parseHtml: ${e.stack}`)

    if (request.html) request.html = '.....'
    const postprocess = request.postprocess
    if (postprocess && postprocess.handler) postprocess.handler = '.....'

    return {
      status: 'ERROR',
      code: 400,
      request,
      error,
    }
  }
}
