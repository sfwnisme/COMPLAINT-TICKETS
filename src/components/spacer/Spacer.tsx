import React from 'react'
import { TSizes } from '../defintions.components'
import S from './Spacer.module.css'

type Props = {
  size?: TSizes
}

export default function Spacer({ size = 'xs' }: Props) {
  const sizes = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
  }
  return (
    <div className={S.spacer} style={{ height: sizes[size] }} />
  )
}