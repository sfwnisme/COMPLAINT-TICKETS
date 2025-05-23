import React from 'react'
import Style from './Dialog.module.css'

type Props = {
  children: React.ReactNode
}

export default function DialogHeader({ children }: Props) {
  return (
    <div className={Style['dialog__header']}>{children}</div>
  )
}