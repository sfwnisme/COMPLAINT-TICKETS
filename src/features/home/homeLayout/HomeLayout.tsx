import React from 'react'

type Props = {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Readonly<Props>) {
  return (
    <div>
      {children}
    </div>
  )
}