import normalizeWhitespace from 'normalize-html-whitespace'
import sanitizeHtml from 'sanitize-html'
import { getNormalizedUrl } from '../utils'
import { load } from 'cheerio'
import { VM } from 'vm2'
import { defaultVMOptions, defaultSanitizeHtmlOptions } from '../config'
import { isObj } from '../utils'
import { ID } from '../ids'

export function actionPostProcess({
  url = '',
  html = '',
  sanitize = false,
  handler = '',
  input: originalInput = {},
  options = {},
}) {
  if (sanitize) {
    const sanitizeHtmlOptions = {
      ...defaultSanitizeHtmlOptions,
      ...options[ID.optSanitizeHtml],
    }
    html = sanitizeHtml(normalizeWhitespace(html), sanitizeHtmlOptions)
  }

  if (!handler) return { html }

  if (!isObj(originalInput)) {
    throw new Error("'postprocess.input' is not an object")
  }

  const $ = load(html)

  // globals
  const _ = {
    isObj,
  }

  const input = {
    ...originalInput,
    url: getNormalizedUrl({ url, options }),
    html,
  }

  const output = {}

  const vm = new VM({
    ...defaultVMOptions,
    sandbox: { $, _, input, output },
  })

  vm.run(`(function({ $, _, input, output }){\n${handler}\n})({ $, _, input, output })`)

  return { html, output }
}
