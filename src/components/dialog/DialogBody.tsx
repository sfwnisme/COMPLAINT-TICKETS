import React from 'react'
import Style from './Dialog.module.css'

type Props = {
  children: React.ReactNode
}

export default function DialogBody({ children }: Props) {
  return (
    <div className={Style['dialog__body']}>
      {children}
    </div>
  )
}