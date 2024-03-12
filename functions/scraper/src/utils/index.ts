import normalizeUrl from '@esm2cjs/normalize-url'
import { defaultNormalizeUrlOptions } from '../config'
import { ID } from '../ids'

export function getNormalizedUrl({ url, options = {} }) {
  try {
    const normalizeOptions = {
      ...defaultNormalizeUrlOptions,
      ...options[ID.optNormalizeUrl],
    }
    return normalizeUrl(
      String(url || '')
        .trim()
        .replace(/;jsessionid=.*$/i, ''),
      normalizeOptions
    )
  } catch (e) {
    console.error(`NORMALIZE URL ERROR: [${url}] ${e}\n${e.stack}`)
    return ''
  }
}

export function isObj(obj: unknown) {
  return typeof obj === 'object' && obj.constructor === Object
}

export function toURL(url: string) {
  return new URL(url)
}
