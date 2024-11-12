import S from './AllTableStyles.module.css'
import React from 'react'

type Props = {
  children: React.ReactNode | string,
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>

export default function THead({ children, ...rest }: Props) {
  return (
    <thead className={S.thead} {...rest}>{children}</thead>
  )
}