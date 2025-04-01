import './App.css'
import { Outlet } from 'react-router-dom'
import Layout from './app/layouts/DashboardLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Layout> */}
      <Outlet />
      {/* </Layout> */}
    </QueryClientProvider>
  )
}

export default App
