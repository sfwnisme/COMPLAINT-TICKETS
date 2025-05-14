import TD from '../../../../../components/table/TD'
import TR from '../../../../../components/table/TR'
import { AxiosError } from 'axios'

export default function ErrorUsersTable({ error }: { error: AxiosError<{ msg?: string }> }) {
  return (
    <TR>
      <TD colSpan={12} align="center" dataCell='Error'>
        Ops..., there is an error:
        {error?.response?.data.msg}
      </TD>
    </TR>
  )
}
