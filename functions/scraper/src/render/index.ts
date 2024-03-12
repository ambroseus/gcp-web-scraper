import puppeteer from 'puppeteer-extra'
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import { onRequest } from './onRequest'
import { defaultBrowserLaunchOptions, defaultPageNavigationOptions } from '../config'
import { ID } from '../ids'

puppeteer.use(StealthPlugin())

let browser = null

export async function launchBrowser() {
  const launchOptions = {
    ...defaultBrowserLaunchOptions,
  }

  browser = await puppeteer.launch(launchOptions)
  console.log(`launch chromium: ${JSON.stringify(launchOptions, null, 2)}`)

  return browser
}

export async function renderPage({ url = '', waitForSelector = '', options = {} }) {
  let page

  try {
    const pageNavigationOptions = {
      ...defaultPageNavigationOptions,
      ...options[ID.optPageNavigation],
    }

    page = await browser.newPage()

    const ua =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    await page.setUserAgent(ua)

    //await page.setCacheEnabled(true)
    await page.setRequestInterception(true)
    page.on('request', onRequest)

    console.log('goto: ', url)
    const pageResponse = await page.goto(url, pageNavigationOptions)
    // if (!isHtml(pageResponse)) {
    //   throw new Error('Url content is not text/html')
    // }
    const resCode = 200 // pageResponse.status()

    if (waitForSelector) {
      console.log('wait for selector: ', waitForSelector)
      await page.waitForSelector(waitForSelector)
    }

    const response = {
      url,
      html: '',
      status: resCode < 400 ? 'OK' : 'ERROR',
      code: resCode < 400 ? 200 : resCode,
      pageResponse: pageResponse ? pageResponse.status() : 200,
    }

    if (resCode >= 400) {
      await page.close()
      return response
    }

    const html = await page.content()
    if (html) response.html = html

    await page.close()
    return response
  } catch (e) {
    if (page) {
      await page.close()
    }
    const error = e.message || e
    console.error(`ERROR renderPage [${url}]: ${e.stack}`)
    return {
      status: 'ERROR',
      code: 400,
      error,
    }
  }
}
