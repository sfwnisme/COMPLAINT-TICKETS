import React from 'react'
import S from './List.module.css'
type Props = {
  children: React.ReactNode,
  position: 'absolute' | 'static',
  rightOrLeft: 'right' | 'left',
  yaxis?: 'top' | 'bottom'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
export default function List({ children, position = 'static', rightOrLeft = 'left', yaxis = 'bottom', ...rest }: Props) {
  console.log(rightOrLeft, position)
  return (
    <ul
      className={`${S.list} ${position === 'absolute' && S['list--absolute']} ${rightOrLeft === 'right' ? S['list--right'] : S['list--left']} ${yaxis === 'bottom' ? S['list--absolute--bottom'] : S['list--absolute--top']}`}
      {...rest}
    >{children}</ul>
  )
}