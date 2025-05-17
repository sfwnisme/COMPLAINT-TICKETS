import { memo } from 'react'
import TD from '../../../../../components/table/TD'
import TR from '../../../../../components/table/TR'
import { AxiosError } from 'axios'

const ErrorUsersTable = ({ error }: { error: AxiosError<{ msg?: string }> }) => {
  return (
    <TR>
      <TD colSpan={12} align="center" dataCell='Error'>
        Ops..., there is an error:
        {error?.response?.data.msg}
      </TD>
    </TR>
  )
}

export default memo(ErrorUsersTable)