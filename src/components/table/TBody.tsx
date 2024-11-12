import S from './AllTableStyles.module.css'
import React from 'react'

type Props = {
  children: React.ReactNode | string,
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export default function TBody({ children, ...rest }: Props) {
  return (
    <tbody className={S.tbody} {...rest}>{children}</tbody>
  )
}