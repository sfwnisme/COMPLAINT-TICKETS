// import React, { useState } from 'react'
import { TVariants } from '../defintions.components';
import S from './Select.module.css'
import { ChevronsUpDown } from "lucide-react";

type Props = {
  children: React.ReactNode;
  sze?: 'sm' | 'md',
  variant?: TVariants,
} & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


export default function Select({ children, sze = 'md', variant = 'primary', ...rest }: Props) {
  // const options = data.map((option) => <option id={option.id} value={option.id}>{option.title}</option>)
  const sizes = {
    sm: 'select-sm',
    md: 'select-md',
  }
  const variants = {
    primary: S['select--primary'],
    info: S['select--info'],
    success: S['select--success'],
    warning: S['select--warning'],
    danger: S['select--danger'],
  }


  const settings = `${S[sizes[sze]]} ${variants[variant]}`

  return (
    <div className={S['select-container']}>
      <select title='select option' className={`${S.select} ${settings}`} defaultChecked={true} {...rest}>
        {children}
      </select>
      <ChevronsUpDown className={S['select__icon']} />
    </div>
  )
}