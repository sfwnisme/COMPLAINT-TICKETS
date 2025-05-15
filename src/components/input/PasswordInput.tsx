import React, { useState } from 'react'
import Input from './Input'
import Button from '../button/Button';
import { Eye, EyeClosed } from 'lucide-react';
import S from './PasswordInput.module.css'

type Props = {
  variant?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  title?: string,
  message?: string,
  // size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type finalType = Props & InputType

const PasswordInput = React.forwardRef<HTMLInputElement, finalType>(({ ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={S['password-input-wrapper']}>
      <Input {...rest} ref={ref} type={!showPassword ? 'password' : 'text'} />
      <div className={S['password-input__eye-wrapper']}>
        <Button size='sm' type='button' shape='soft' title={!showPassword ? 'show password' : 'hide password'}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <Eye size={11} /> : <EyeClosed size={11} />}
        </Button>
      </div>
    </div>
  )
})

export default PasswordInput