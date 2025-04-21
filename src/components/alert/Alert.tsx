import S from './Alert.module.css'
import React from 'react'
import { TVariants } from '../defintions.components'

type Props = {
  children: React.ReactNode,
  variant?: TVariants,
  icon?: React.ReactNode,
  visible: boolean
}

export default function Alert({ children, variant = 'primary', icon, visible = false }: Readonly<Props>) {
  const variants = {
    primary: S['alert--primary'],
    info: S['alert--info'],
    success: S['alert--success'],
    warning: S['alert--warning'],
    danger: S['alert--danger'],
  }
  return (
    <>
      {visible && <div className={`${S.alert} ${variants[variant]}`}>
        {
          icon &&
          <div className={S['alert__icon']}>
            {icon}
          </div>
        }
        <p className={S['alert_content']}>
          {children}
        </p>
      </div>}
    </>
  )
}