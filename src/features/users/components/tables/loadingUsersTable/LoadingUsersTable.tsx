import { memo } from 'react'
import TD from '../../../../../components/table/TD'
import TR from '../../../../../components/table/TR'
import Skeleton from '../../../../../components/skeleton/Skeleton'

const LoadingUsersTable = () => {
  return (
    <>
      <TR>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton width='100px' />
        </TD>
        <TD align="center" >
          <Skeleton height='20px' width='20px' />
        </TD>
      </TR>
      <TR>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton width='100px' />
        </TD>
        <TD align="center" >
          <Skeleton height='20px' width='20px' />
        </TD>
      </TR>
      <TR>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton />
        </TD>
        <TD align="center" >
          <Skeleton width='100px' />
        </TD>
        <TD align="center" >
          <Skeleton height='20px' width='20px' />
        </TD>
      </TR>
    </>
  )
}
export default memo(LoadingUsersTable)