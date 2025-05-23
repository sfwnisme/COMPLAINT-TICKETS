import S from './Alert.module.css'
import React from 'react'
import { CircleAlert, CircleCheck, CircleHelp, Info, TriangleAlert } from 'lucide-react'
import { Variants } from '../../types/types'

type Props = {
  children: React.ReactNode,
  variant?: Variants,
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
    primary: <CircleHelp size='70' />,
    info: <Info size='70' />,
    success: <CircleCheck size='70' />,
    warning: <TriangleAlert size='70' />,
    danger: <CircleAlert size='70' />,
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