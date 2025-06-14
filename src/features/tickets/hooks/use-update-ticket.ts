import { useCallback } from 'react'
import useUpdateApiData from '../../../hooks/use-update-api-data'
import { SubmitHandler } from 'react-hook-form'
import { UpdateTicketType } from '../schemas/ticket.schema'
import axios from 'axios'

export default function useUpdateTicket(ticketId: string = '') {
  const mutation = useUpdateApiData({ endpoint: '/tickets', revalidateKey: '/tickets', id: ticketId })

  const onSubmit: SubmitHandler<UpdateTicketType> = useCallback(async (data) => {
    try {
      const res = await mutation.mutateAsync(data)
      return res
    } catch (error) {
      console.log('update ticket error', error)
    }
  }, [mutation])

  let typedError
  if (axios.isAxiosError(mutation.error)) {
    typedError = mutation.error
  }
  const errorMessage = Array.isArray(typedError?.response?.data?.msg)
    ? typedError?.response?.data?.msg.map((m: { path: string, msg: string }) => m.path + ":" + m.msg)
    : typedError?.response?.data?.msg
  const successMessage = 'user updated successfully'
  return { onSubmit, ...mutation, errorMessage, successMessage }
}
