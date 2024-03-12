import { type PuppeteerLaunchOptions } from 'puppeteer'

export const port = process.env.PORT || '8080'

export const defaultVMOptions = {
  timeout: 5000, // 5 sec
  eval: false, // no eval
  wasm: false, // no wasm
  fixAsync: true, // no async
}

export const defaultBrowserLaunchOptions: PuppeteerLaunchOptions = {
  defaultViewport: {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: true,
    isMobile: false,
    width: 1920,
  },
  headless: 'new',
  devtools: false,
  args: [
    '--allow-running-insecure-content',
    '--autoplay-policy=user-gesture-required',
    '--disable-component-update',
    '--disable-domain-reliability',
    '--disable-features=AudioServiceOutOfProcess,IsolateOrigins,site-per-process',
    '--disable-print-preview',
    '--disable-setuid-sandbox',
    '--disable-site-isolation-trials',
    '--disable-speech-api',
    '--disable-web-security',
    '--disk-cache-size=33554432',
    '--enable-features=SharedArrayBuffer',
    '--hide-scrollbars',
    '--ignore-gpu-blocklist',
    '--in-process-gpu',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--use-gl=swiftshader',
    '--window-size=1920,1080',
    '--single-process',
  ],
  ignoreHTTPSErrors: true,
}

export const defaultPageNavigationOptions = {
  waitUntil: 'load',
  timeout: 30000, // 30 sec
}

export const defaultNormalizeUrlOptions = {
  defaultProtocol: 'https:',
  stripHash: true,
  stripWWW: false,
}

export const defaultSanitizeHtmlOptions = {
  allowedTags: false, // all
  allowedAttributes: false, // all
  allowVulnerableTags: true,
  selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
  allowedSchemes: ['http', 'https'], // no ftp, no mailto
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  allowProtocolRelative: true,
  enforceHtmlBoundary: true,
}

export const defaultDenyOrigins = [
  'quantserve',
  'adzerk',
  'doubleclick',
  'adition',
  'exelator',
  'sharethrough',
  'cdn.api.twitter',
  'google-analytics',
  'googletagmanager',
  'google',
  'fontawesome',
  'facebook',
  'twitter',
  'analytics',
  'optimizely',
  'clicktale',
  'mixpanel',
  'zedo',
  'clicksor',
  'tiqcdn',
]

export const defaultDenyResources = [
  'image',
  'media',
  'font',
  'websocket',
  'manifest',
  'texttrack',
  'object',
  'beacon',
  'csp_report',
  'imageset',
]
