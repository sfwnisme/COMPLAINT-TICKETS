// import './App.css'
import { Outlet } from 'react-router-dom'
import Layout from './app/layout/Layout'


function App() {

  return (
    <Layout>
      {/* <Select /> */}
      <Outlet />
    </Layout>
  )
}

export default App
