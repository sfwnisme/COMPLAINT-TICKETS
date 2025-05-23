import Style from './UserChip.module.css'
import Avatar from '../avatar/Avatar'
import { Sizes } from '../../types/types'

type Props = {
  name: string,
  text: string,
  avatarSize?: Sizes,
}

export default function UserChip({ name = 'user', text = " date or email", avatarSize = 'sm' }: Readonly<Props>) {
  return (
    <div className={Style['user-chip']}>
      <Avatar size={avatarSize} name={name} />
      <div className={Style['user-chip__info']}>
        <p className={`${Style['user-chip__name']}`}>{name}</p>
        <p className={`${Style['user-chip__text']}`}>{text}</p>
      </div>
    </div>
  )
}