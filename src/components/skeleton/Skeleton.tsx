import React from 'react'
import Style from './Skeleton.module.css'
import { TVariants } from '../defintions.components'

type Props = {
  height?: string,
  width?: string,
  variant?: TVariants,
  label?: string,
}
export default function Skeleton({ height = '20px', width = '100%', variant = 'primary', label = 'skeleton label' }: Props) {
  const variants: Record<TVariants, string> = {
    primary: Style['skeleton--primary'],
    info: Style['skeleton--info'],
    success: Style['skeleton--success'],
    warning: Style['skeleton--warning'],
    danger: Style['skeleton--danger'],
  }
  return (
    <div
      className={`${Style.skeleton} ${variants[variant]}`}
      style={{ height, width }}
      aria-label={`Loading ${label}`}
      role='status'
      aria-live='polite'
    />
  )
}