'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QueryProvider = ({ children }) => {
  const [client] = useState(new QueryClient()) // workaround for Next.js 14

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
