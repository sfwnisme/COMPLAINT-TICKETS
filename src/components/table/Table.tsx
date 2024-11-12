import React from 'react'
import S from './AllTableStyles.module.css'

type Props = {
  children: React.ReactNode;
  striped?: boolean;
  grid?: boolean;
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>

export default function Table({ children, striped = false, grid = false, ...rest }: Props) {
  return (
    <div className={S['table-wrapper']}>
      <table className={`${S.table} ${grid && S['table-grid']} ${striped && S['table-striped']}`} {...rest}>
        {children}
      </table>
    </div>
  )
}