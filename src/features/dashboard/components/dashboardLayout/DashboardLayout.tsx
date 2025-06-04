import Style from './DashboardLayout.module.css'
import Sidebar from '../sidebar/Sidebar'
import DasbhoardNavbar from '../dashboardNavbar/DasbhoardNavbar'
import React from 'react'

type Props = {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Readonly<Props>) {
  return (
    <div className={`${Style.layout}`}>
      <Sidebar />
      <main className={Style.outlet}>
        <DasbhoardNavbar />
        {children}
      </main>
    </div>
  )
}