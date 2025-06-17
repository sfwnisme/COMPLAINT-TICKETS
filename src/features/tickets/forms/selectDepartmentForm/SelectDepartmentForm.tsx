import React from 'react'
import Select from '../../../../components/select/Select'
import useUpdateTicketFormValidation from '../../hooks/use-update-ticket-form-validation'
import useUpdateTicket from '../../hooks/use-update-ticket'
import { DevTool } from '@hookform/devtools'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import Style from './SelectDepartmentForm.module.css'
import useGetAllData from '../../../../hooks/use-get-all-data'
import { IDepartment } from '../../../../types/types'
import Skeleton from '../../../../components/skeleton/Skeleton'

type Props = {
  title?: string,
  defaultValue?: string,
  ticketId: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectDepartmentForm = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ticketId, defaultValue, ...rest }) => {
    const {
      register,
      control,
      handleSubmit,
    } = useUpdateTicketFormValidation()
    const departments = useGetAllData<IDepartment[]>('/departments')
    const { onSubmit, isPending } = useUpdateTicket(ticketId)

    if (!departments?.data) return <Skeleton />

    console.log(departments.data)
    const renderDepartmentsOptions = departments.data.map((department) => (
      <option key={department?._id} value={department?._id} id={department?._id}>
        {department?.title}
      </option>
    ))
    return (
      <form onChange={handleSubmit(onSubmit)} className={Style['select-status-form']}>
        <Select sze='sm' title={title} {...rest} {...register('department')} disabled={isPending || departments.isLoading} defaultValue={defaultValue ?? 'default'}>
          <option value='default'>Select Department</option>
          {renderDepartmentsOptions}
        </Select>
        {isPending && <LoadingIcon />}
        <DevTool control={control} />
      </form>
    )
  }
)
export default SelectDepartmentForm
