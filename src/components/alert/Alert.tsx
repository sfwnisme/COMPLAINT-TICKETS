import S from './Alert.module.css'
import React from 'react'
import { TVariants } from '../defintions.components'
import { CircleAlert, CircleCheck, CircleHelp, Info, TriangleAlert } from 'lucide-react'

type Props = {
  children: React.ReactNode,
  variant?: TVariants,
  hasIcon?: boolean,
  visible: boolean
}

export default function Alert({ children, variant = 'primary', hasIcon, visible = false }: Readonly<Props>) {
  const variants = {
    primary: S['alert--primary'],
    info: S['alert--info'],
    success: S['alert--success'],
    warning: S['alert--warning'],
    danger: S['alert--danger'],
  }
  const icons = {
    primary: <CircleHelp />,
    info: <Info />,
    success: <CircleCheck />,
    warning: <TriangleAlert />,
    danger: <CircleAlert />,
  }
  return (
    <>
      {visible && <div className={`${S.alert} ${variants[variant]}`}>
        {
          hasIcon &&
          <div className={S['alert__icon']}>
            {icons[variant]}
          </div>
        }
        <p className={S['alert_content']}>
          {children}
        </p>
      </div>}
    </>
  )
}