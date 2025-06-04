import './App.css'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  useEffect(() => {
    document.title = 'TIC'
  })
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
