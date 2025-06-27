import React from 'react'
import S from './Button.module.css'

type Props = {
  children?: React.ReactNode,
  variant?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'square';
  shape?: 'default' | 'outline' | 'soft' | 'none',
  outline?: boolean;
  width?: 'fill' | 'fit',
}
type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type finalType = Props & ButtonType

const Button = React.forwardRef<HTMLButtonElement, finalType>((
  { children = "button", size = 'xl', variant = 'primary', shape = 'default', width = 'fit', ...rest }
  , ref) => {
  const sizes = {
    xs: S['btn--xs'],
    sm: S['btn--sm'],
    md: S['btn--md'],
    lg: S['btn--lg'],
    xl: S['btn--xl'],
    square: S['btn--square'],
  }
  const variants = {
    primary: S['btn--primary'],
    info: S['btn--info'],
    success: S['btn--success'],
    warning: S['btn--warning'],
    danger: S['btn--danger'],
  }
  const shapes = {
    default: S['btn--default'],
    outline: S['btn--outline'],
    soft: S['btn--soft'],
    none: S['btn--none']
  }

  const settings = `
  ${S.btn} 
  ${sizes[size]} 
  ${variants[variant]} 
  ${shapes[shape]}
  ${width === 'fill' && S['btn--width--fill']}
  `
  return (
    <button {...rest} className={settings} ref={ref}>{children}</button>
  )
})

export default Button


