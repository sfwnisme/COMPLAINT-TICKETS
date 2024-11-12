import S from './AllTableStyles.module.css'
import React from 'react'

type Props = {
  children: React.ReactNode | string,
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export default function TFoot({ children, ...rest }: Props) {
  return (
    <tfoot className={S.tfoot} {...rest}>{children}</tfoot>
  )
}