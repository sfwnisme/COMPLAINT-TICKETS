import { memo } from 'react'
import TD from '../../../../../components/table/TD'
import TR from '../../../../../components/table/TR'

const LoadingUsersTable = () => {
  return (
    <TR>
      <TD colSpan={12} align="center" >
        loading...
      </TD>
    </TR>
  )
}
export default memo(LoadingUsersTable)