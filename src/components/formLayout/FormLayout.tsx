import React from 'react'
import Style from './FormLayout.module.css'
import { useForm } from 'react-hook-form'

type Props = {
  children: React.ReactNode,
  title: string,
  subtitle: string,
  onSubmit: () => void,
}

export default function FormLayout({ children, title, subtitle, onSubmit }: Props) {
  const { handleSubmit } = useForm()
  return (
    <div className={Style.form__container}>
      <div className={Style["form-header"]}>
        <h2 className={Style["form__title"]}>{title}</h2>
        <p className={Style["form__subtitle"]}>{subtitle}</p>
      </div>
      <form className={Style['form__element']} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </div>
  )
}