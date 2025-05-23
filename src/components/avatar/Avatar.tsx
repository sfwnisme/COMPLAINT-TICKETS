import S from './Avatar.module.css'
import { User } from 'lucide-react'
import { Sizes } from '../../types/types'

type Props = {
  image?: string,
  name?: string,
  size?: Sizes,
} & React.HTMLAttributes<HTMLDivElement>

export default function Avatar({
  image, name, size = "sm", ...rest }: Props) {
  const nameFirstTwoLetters = name?.slice(0, 2).toUpperCase()

  const sizes = {
    xs: S['avatar--xs'],
    sm: S['avatar--sm'],
    md: S['avatar--md'],
    lg: S['avatar--lg'],
    xl: S['avatar--xl'],
  }

  return (
    <div className={`${S.avatar} ${sizes[size]}`} {...rest}>
      {
        image
          ? image
          : name
            ? <p className={S.avatar__name}>{nameFirstTwoLetters}</p>
            : <User color='gray' />
      }
    </div>
  )
}