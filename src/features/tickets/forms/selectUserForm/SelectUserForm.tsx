import React from 'react'
import Select from '../../../../components/select/Select'
import useUpdateTicketFormValidation from '../../hooks/use-update-ticket-form-validation'
import useUpdateTicket from '../../hooks/use-update-ticket'
import { DevTool } from '@hookform/devtools'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import Style from './SelectUserForm.module.css'
import useGetAllData from '../../../../hooks/use-get-all-data'
import { IUser } from '../../../../types/types'
import Skeleton from '../../../../components/skeleton/Skeleton'

type Props = {
  title?: string,
  defaultValue?: string,
  ticketId: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectUserForm = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ticketId, defaultValue, ...rest }) => {
    const {
      register,
      control,
      handleSubmit,
    } = useUpdateTicketFormValidation()
    const users = useGetAllData<IUser[]>('/users')
    const { onSubmit, isPending } = useUpdateTicket(ticketId)

    if (!users?.data) return <Skeleton />

    console.log(users.data)
    const renderUsersOptions = users.data.map((user) => (
      <option key={user?._id} value={user?._id} id={user?._id}>
        {user?.name}
      </option>
    ))
    return (
      <form onChange={handleSubmit(onSubmit)} className={Style['select-status-form']}>
        <Select sze='sm' title={title} {...rest} {...register('assignedTo')} disabled={isPending || users.isLoading} defaultValue={defaultValue ?? 'default'}>

          <option value='default'>Assign User</option>
          {renderUsersOptions}
        </Select>
        {isPending && <LoadingIcon />}
        <DevTool control={control} />
      </form>
    )
  }
)
export default SelectUserForm
