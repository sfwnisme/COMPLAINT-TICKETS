import { Outlet } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard layout/DashboardLayout'


export default function Dashboard() {
  return (
    <div>
      <Outlet />
    </div>
  )
}