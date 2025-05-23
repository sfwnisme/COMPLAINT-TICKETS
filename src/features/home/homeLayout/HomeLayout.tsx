import { Outlet } from 'react-router-dom'
import HomeNavbar from '../components/HomeNavbar'


export default function HomeLayout() {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  )
}