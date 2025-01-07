import Button from '../button/Button'
import S from './Dialog.module.css'
import { X } from 'lucide-react'

type Props = {
  title: string,
  description: string,
  CTA_L: string,
  CTA_R: string
}

export default function Dialog({ title = "Dialog Title", description = "dialog description: you can display the description for the dialog here", CTA_L = "Cancel", CTA_R = 'Delete' }: Props) {

  return (
    <div className={S.dialog}>
      <div className={S.dialog_content}>
        <Button variant='primary' size='square' outline className={S.close_icon}><X size={18} /></Button>
        <div className={S.body}>
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
        <div className={S.footer}>
          <Button variant='danger' size='lg'>{CTA_R}</Button>
          <Button variant='primary' size='lg' outline>{CTA_L}</Button>
        </div>
      </div>
    </div>
  )
}