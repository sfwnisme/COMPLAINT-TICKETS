import { Outlet } from 'react-router-dom'
import DashboardLayout from '../../features/dashboard/components/dashboardLayout/DashboardLayout'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}