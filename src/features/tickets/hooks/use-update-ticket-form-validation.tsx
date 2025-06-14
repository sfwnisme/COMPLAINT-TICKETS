import { useForm } from 'react-hook-form'
import { UpdateTicketType } from '../schemas/ticket.schema'

export default function useUpdateTicketFormValidation() {
  const form = useForm<UpdateTicketType>({
    mode: 'all',
  })
  return form
}
