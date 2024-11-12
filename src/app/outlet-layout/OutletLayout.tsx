import React from 'react'
import Title from '../../components/title/Title'
import Table from '../../components/table/Table'
import THead from '../../components/table/THead'
import TR from '../../components/table/TR'
import TH from '../../components/table/TH'
import TBody from '../../components/table/TBody'
import { tableDataTest } from '../../libs/data-center'
import TD from '../../components/table/TD'
import Badge from '../../components/badge/Badge'
import Button from '../../components/button/Button'
import { EllipsisVertical, Trash } from 'lucide-react'
import TFoot from '../../components/table/TFoot'

type Props = {
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function OutletLayout({ children }: Props) {
  return (
    <div>
      <Title text='Tickets' />
      <Table striped grid>
        <THead>
          <TR>
            <TH>name</TH>
            <TH>issue</TH>
            <TH>ref no.</TH>
            <TH>department</TH>
            <TH>status</TH>
            <TH>actions</TH>
          </TR>
        </THead>
        <TBody>
          {tableDataTest.slice(0, 10).map((table) => (
            <TR key={table?.id} id={String(table?.id)}>
              <TD dataCell='name'>{table.name}</TD>
              <TD dataCell='issue'>{table.issue}</TD>
              <TD dataCell='ref'>{table.ref}</TD>
              <TD dataCell='department'>{table.department}</TD>
              <TD dataCell='status'>{<Badge text={table.status} variant={'success'} />}</TD>
              <TD dataCell='actions'>
                <div className='flex'>
                  <Button outline variant='info' size='xs'><EllipsisVertical size={15} /></Button>
                  <Button outline variant='danger' size='xs'><Trash size={15} /></Button>
                </div>
              </TD>
            </TR>
          ))}
        </TBody>
        <TFoot >
          <TR>
            <TD colSpan={23}>pagination</TD>
          </TR>
        </TFoot>
      </Table>
    </div>
  )
}