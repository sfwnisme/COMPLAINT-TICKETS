import React from 'react'
import styles from './Input.module.css'

type Props = {
  variant?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  // size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type finalType = Props & InputType

const Input = React.forwardRef<HTMLInputElement, finalType>(({ variant = 'primary', ...rest }, ref) => {
  const variants = {
    primary: styles.primary,
    info: styles.info,
    success: styles.success,
    warning: styles.warning,
    danger: styles.danger,
  }

  const settings = `${styles.input} ${variants[variant]}`
  return (
    <input className={settings} placeholder="fill the input" ref={ref} {...rest} />
  )
})

export default Input


