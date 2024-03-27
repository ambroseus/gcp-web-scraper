'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QueryProvider = ({ children }) => {
  const [client] = useState(new QueryClient())

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
