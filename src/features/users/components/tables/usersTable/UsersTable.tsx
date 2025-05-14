import Style from './UsersTable.module.css'
import TR from "../../../../../components/table/TR"
import Table from "../../../../../components/table/Table"
import THead from "../../../../../components/table/THead"
import TH from "../../../../../components/table/TH"
import TBody from "../../../../../components/table/TBody"
import React from 'react'

export default function UsersTable({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className={Style.users}>
        <Table>
          <THead>
            <TR>
              <TH>Name</TH>
              <TH>Email</TH>
              <TH>Role</TH>
              <TH>Action</TH>
            </TR>
          </THead>
          <TBody>
            {children}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
