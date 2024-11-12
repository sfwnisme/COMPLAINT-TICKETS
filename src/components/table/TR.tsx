import S from './AllTableStyles.module.css'
import React from 'react'

type Props = {
  children: React.ReactNode | string,
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>

export default function TR({ children, ...rest }: Props) {
  return (
    <tr className={S.tr} {...rest}>{children}</tr>
  )
}