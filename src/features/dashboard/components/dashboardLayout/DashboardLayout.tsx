import { Outlet } from 'react-router-dom'
import Style from './DashboardLayout.module.css'
import Sidebar from '../sidebar/Sidebar'
import DasbhoardNavbar from '../dashboardNavbar/DasbhoardNavbar'

export default function DashboardLayout() {
  return (
    <div className={`${Style.layout}`}>
      <Sidebar />
      <main className={Style.outlet}>
        {/* <div className={Style["outlet-content"]}> */}
        <DasbhoardNavbar />
        <Outlet />
        {/* </div> */}
      </main>
    </div>
  )
}