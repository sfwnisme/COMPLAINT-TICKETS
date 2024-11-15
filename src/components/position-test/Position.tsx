import React from 'react'
import S from './Position.module.css'
import useScreenWidth from '../../hooks/use-screen-width'

export default function Position() {
  const hook = useScreenWidth()
  console.log(hook)
  return (
    <div className={`${S.position} ${S.positionLeft}`}>Position</div>
  )
}
