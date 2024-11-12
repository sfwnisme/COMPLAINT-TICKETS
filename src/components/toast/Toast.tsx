import { X } from 'lucide-react'
import S from './Toast.module.css'
import Button from '../button/Button'
import { useCallback, useState } from 'react'

type Props = {
  text?: string
}

export default function Toast({ text = 'This is a toast message' }: Props) {
  const [isToastClosed, setIsToastClosed] = useState(false)

  const handleToastClose = useCallback(() => {
    setIsToastClosed((prev) => !prev)
  }, [])

  return (
    <>
      {!isToastClosed &&
        <div className={S.toast} onClick={handleToastClose}>
          <p>
            {text}
          </p>
          <Button variant='primary' size='square' outline onClick={handleToastClose}>
            <X size={12} />
          </Button>
        </div>
      }
    </>
  )
}