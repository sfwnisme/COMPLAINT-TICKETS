import { Image } from 'lucide-react'
import Style from './FileChip.module.css'

type Props = {
  thumb?: string,
  name: string,
  size?: string,
}

export default function FileChip({ thumb, name, size }: Props) {
  return (
    <div className={Style['file-chip']}>
      <div className={Style['file-chip__thumb']}>
        {thumb
          ? <img src={thumb} alt="" />
          : <Image size={45} strokeWidth={0.7} color='var(--primary-color-400)' />
        }
      </div>
      <div className={Style['file-chip__info']}>
        <div className={Style['file-chip__name']}>{name}</div>
        <small className={Style['file-chip__size']}>{size}</small>
      </div>
    </div>
  )
}