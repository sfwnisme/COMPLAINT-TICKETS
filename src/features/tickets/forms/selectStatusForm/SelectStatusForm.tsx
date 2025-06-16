import React from 'react'
import Select from '../../../../components/select/Select'
import { TICKET_STATUS } from '../../../../constraints/constraints'
import useUpdateTicketFormValidation from '../../hooks/use-update-ticket-form-validation'
import useUpdateTicket from '../../hooks/use-update-ticket'
import { DevTool } from '@hookform/devtools'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import Style from './SelectStatusForm.module.css'

type Props = {
  title?: string,
  defaultValue?: string,
  ticketId: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectStatusForm = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ticketId, defaultValue, ...rest }) => {
    const {
      register,
      control,
      handleSubmit,
    } = useUpdateTicketFormValidation()
    const { onSubmit, isPending } = useUpdateTicket(ticketId)

    return (
      <form onChange={handleSubmit(onSubmit)} className={Style['select-status-form']}>
        <Select title={title} {...rest} {...register('status')} disabled={isPending} defaultValue={defaultValue}>
          {TICKET_STATUS.map((status) => (
            <option key={status} value={status} id={status}>
              {status}
            </option>
          ))}
        </Select>
        {isPending && <LoadingIcon />}
        <DevTool control={control} />
      </form>
    )
  }
)
export default SelectStatusForm
