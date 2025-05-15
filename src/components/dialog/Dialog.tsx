import Button from '../button/Button'
import S from './Dialog.module.css'
import { X } from 'lucide-react'

type Props = {
  header: string,
  description: string,
  CTA_L: string,
  CTA_R: string,
  isVisible: boolean,
  setIsVisible: () => void,
  action: () => void,
  isLoading: boolean
}

export default function Dialog({
  header = "Dialog Header",
  description = "dialog description: you can display the description for the dialog here",
  CTA_L = "Cancel",
  CTA_R = 'Delete',
  isVisible = false,
  setIsVisible,
  action,
  isLoading
}: Readonly<Props>) {

  const actionFunc = async () => {
    await action()
    setIsVisible()
  }

  return (
    <>
      {isVisible && <div className={S.dialog}>
        <div className={S.dialog_content}>
          <Button
            variant='primary'
            size='square'
            shape='soft'
            className={S.close_icon}
            onClick={() => setIsVisible()}
          >
            <X size={18} />
          </Button>
          <div className={S.body}>
            <h4>{header}</h4>
            <p>
              {description}
            </p>
          </div>
          <div className={S.footer}>
            <Button
              variant='danger'
              shape='soft'
              size='lg'
              onClick={() => actionFunc()}
            >{!isLoading ? CTA_R : 'Loading...'}</Button>
            <Button
              variant='primary'
              size='lg'
              shape='soft'
              onClick={() => setIsVisible()}
            >{CTA_L}</Button>
          </div>
        </div>
      </div>}
    </>
  )
}