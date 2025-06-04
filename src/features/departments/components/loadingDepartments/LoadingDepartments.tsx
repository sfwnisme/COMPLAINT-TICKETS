import React from 'react'
import Table from '../../../../components/table/Table'
import THead from '../../../../components/table/THead'
import TH from '../../../../components/table/TH'
import Skeleton from '../../../../components/skeleton/Skeleton'
import TBody from '../../../../components/table/TBody'
import TR from '../../../../components/table/TR'
import TD from '../../../../components/table/TD'

export default function LoadingDepartments() {
  return (
    <div>
      <Table>
        <THead>
          <TH>
            <Skeleton width='110px' />
          </TH>
          <TH>
            <Skeleton width='110px' />
          </TH>
        </THead>
        <TBody>
          <TR>
            <TD><Skeleton width='120px' /></TD>
            <TD><Skeleton width='240px' /></TD>
          </TR>
          <TR>
            <TD><Skeleton width='100px' /></TD>
            <TD><Skeleton width='210px' /></TD>
          </TR>
          <TR>
            <TD><Skeleton width='160px' /></TD>
            <TD><Skeleton width='130px' /></TD>
          </TR>
        </TBody>
      </Table>
    </div>
  )
}
