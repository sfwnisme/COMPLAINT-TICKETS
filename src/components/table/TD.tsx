import S from './AllTableStyles.module.css'
import React from 'react'

type Props = {
  children?: React.ReactNode | string,
  dataCell?: string,
} & React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>

export default function TD({ children = '', dataCell, ...rest }: Props) {
  return (
    <td className={S.td}{...rest} data-cell={dataCell}>{children}</td>
  )
}