import { Sizes } from '../../types/types'
import S from './Spacer.module.css'

type Props = {
  size?: Sizes | '2xl' | '3xl'
}

export default function Spacer({ size = 'xs' }: Props) {
  const sizes = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    '2xl': '64px',
    '3xl': '84px'
  }
  return (
    <div className={S.spacer} style={{ height: sizes[size] }} />
  )
}