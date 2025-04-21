import Button from '../button/Button'
import S from './Dialog.module.css'
import { X } from 'lucide-react'
import Loader from '../loaders/loader/Loader';

type Props = {
  title: string,
  description: string,
  CTA_L: string,
  CTA_R: string,
  isActive: boolean,
  setIsActive: (prev: boolean) => void,
  action: () => void,
  isLoading: boolean
}

export default function Dialog({
  title = "Dialog Title",
  description = "dialog description: you can display the description for the dialog here",
  CTA_L = "Cancel",
  CTA_R = 'Delete',
  isActive = false,
  setIsActive,
  action,
  isLoading
}: Readonly<Props>) {

  const actionFunc = async () => {
    await action()
    setIsActive(false)
  }

  return (
    <>
      {isActive && <div className={S.dialog}>
        <div className={S.dialog_content}>
          <Button
            variant='primary'
            size='square'
            outline
            className={S.close_icon}
            onClick={() => setIsActive(false)}
          >
            <X size={18} />
          </Button>
          <div className={S.body}>
            <h4>{title}</h4>
            <p>
              {description}
            </p>
          </div>
          <div className={S.footer}>
            <Button
              variant='danger'
              size='lg'
              onClick={() => actionFunc()}
            >{!isLoading ? CTA_R : 'Loading...'}</Button>
            <Button
              variant='primary'
              size='lg'
              outline
              onClick={() => setIsActive(false)}
            >{CTA_L}</Button>
          </div>
        </div>
      </div>}
    </>
  )
}