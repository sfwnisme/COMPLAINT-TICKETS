import { Outlet } from 'react-router-dom'
import Style from './DashboardLayout.module.css'
import Sidebar from '../sidebar/Sidebar'

export default function DashboardLayout() {
  return (
    <div className={`${Style.layout}`}>
      <Sidebar />
      <main className={Style.outlet}>
        <div className={Style["outlet-content"]}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}