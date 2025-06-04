import HomeNavbar from '../components/HomeNavbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  )
}