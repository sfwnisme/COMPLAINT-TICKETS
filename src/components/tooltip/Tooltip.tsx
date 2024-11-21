import React from 'react'
import S from './Tooptip.module.css'
export default function Tooltip({ title = 'tooltip title' }: { title: string }) {
  return (
    <span className={S.tooltip}>{title}</span>
  )
}
