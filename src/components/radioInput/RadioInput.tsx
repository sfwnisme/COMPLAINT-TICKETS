import React from "react"
import Style from './RadioInput.module.css'

type Props = {
  id: string,
  value: string,
  label: string,
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const RadioInput = React.forwardRef<HTMLInputElement, Props>(({ id, label, ...rest }, ref) => {
  return (
    <div className={Style['radio-input']}>
      <input className={Style['radio-input__input']} {...rest} type='radio' value={rest.value} id={id} ref={ref} hidden />
      <label htmlFor={id} className={Style['radio-input__label']}>{label}</label>
    </div>
  )
})

export default RadioInput
