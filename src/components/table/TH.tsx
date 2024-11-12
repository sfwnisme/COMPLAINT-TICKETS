import React from 'react'
import S from './AllTableStyles.module.css'

type Props = {
  children: React.ReactNode | string,
} & React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>

export default function TH({ children = 'table header', ...rest }: Props) {
  return (
    <th className={S.th} {...rest}>{children}</th>
  )
}