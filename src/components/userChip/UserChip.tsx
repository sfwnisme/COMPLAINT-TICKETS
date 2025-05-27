import Style from './UserChip.module.css'
import Avatar from '../avatar/Avatar'
import { Sizes } from '../../types/types'

type Props = {
  name: string,
  text?: string,
  avatarSize?: Sizes,
  fontSize?: Sizes
}

export default function UserChip({ name = 'user', text = "", avatarSize = 'sm', fontSize = "xs" }: Readonly<Props>) {
  const sizes = {
    xs: Style['user-chip__name--xs'],
    sm: Style['user-chip__name--sm'],
    md: Style['user-chip__name--md'],
    lg: Style['user-chip__name--lg'],
    xl: Style['user-chip__name--xl'],
  }
  return (
    <div className={Style['user-chip']}>
      <Avatar size={avatarSize} name={name} />
      <div className={Style['user-chip__info']}>
        <p className={`${Style['user-chip__name']} ${sizes[fontSize]}`}>{name}</p>
        {text && <p className={`${Style['user-chip__text']}`}>{text}</p>}
      </div>
    </div>
  )
}