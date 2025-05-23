import { Loader2, LucideProps } from 'lucide-react'
import Style from './LoadingIcon.module.css'


export default function LoadingIcon({ size = 14, strokeWidth = 3, color = 'var(--primary-color-400)', ...rest }: Readonly<LucideProps>) {
  return <Loader2 size={size} strokeWidth={strokeWidth} {...rest} color={color} className={Style['loading-icon']} />
}