import { memo } from 'react'
import Style from './Dialog.module.css'

type Props = {
  children: React.ReactNode,
  isVisible: boolean,
}

const Dialog = ({ children, isVisible }: Readonly<Props>) => {
  if (!isVisible) return null
  return (
    <div className={Style.dialog}>
      <div className={Style.dialog_content}>
        {children}
      </div>
    </div>
  )
}

export default memo(Dialog)