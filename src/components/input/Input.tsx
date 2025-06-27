import React from 'react'
import S from './Input.module.css'
import HelpText from '../helpText/HelpText';

type Props = {
  variant?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  title?: string,
  message?: string,
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type finalType = Props & InputType

const Input = React.forwardRef<HTMLInputElement, finalType>(({ variant = 'primary', title = "", message = "", ...rest }, ref) => {
  const variants = {
    primary: S.primary,
    info: S.info,
    success: S.success,
    warning: S.warning,
    danger: S.danger,
  }

  const settings = `${S.input} ${variants[variant]}`
  return (
    <div className={S['input-wrapper']}>
      {title && <label htmlFor={rest.name} className={S.label}>
        {title || 'Input ttitle'}
      </label>}
      <input className={settings} id={rest.name} placeholder="fill the input" ref={ref} {...rest} />
      {message && <HelpText icon='invisible' variant={variant}>{message}</HelpText>}
    </div>
  )
})

export default Input




