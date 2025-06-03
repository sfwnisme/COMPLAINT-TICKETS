import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createTicketSchema, CreateTicketType } from '../schemas/ticket.schema'

export default function useCreateTicketFormValidation() {
  const formValidation = useForm<CreateTicketType>({
    resolver: zodResolver(createTicketSchema),
    mode: 'all',
  })
  return formValidation
}