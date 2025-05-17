import React from 'react'
import Style from './Grid.module.css'

type Props = {
  children: React.ReactNode,
  maxWidth: string,
  gap?: string,
}

export default function Grid({ children, maxWidth = '320', gap = '8' }: Props) {
  return (
    <div className={Style.grid} style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${maxWidth}px, auto))`, gap: `${gap}px` }}>
      {children}
    </ div>
  )
}