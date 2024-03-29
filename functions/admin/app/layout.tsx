import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { AppBar } from '@/components/AppBar'
import { theme } from './theme'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import 'mantine-react-table/styles.css'
import '../global.css'

export const metadata = {
  title: 'web-scraper admin',
  // description: 'I am using Mantine with Next.js!',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme}>
          <AppBar />
          {children}
          <Notifications />
        </MantineProvider>
      </body>
    </html>
  )
}
