import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../layouts/dashboard layout/DashboardLayout'

type Props = {}

export default function Dashboard({ }: Props) {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  )
}