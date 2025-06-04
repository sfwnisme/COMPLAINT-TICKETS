import { z } from 'zod'
import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form'
import { useCallback } from 'react'
import { createCommentSchema } from '../schemas/ticket.schema'

type Inputs = z.infer<typeof createCommentSchema>
export default function useCreateComment(ticketId: string = "") {
  const { mutateAsync, isPending, isSuccess, isError } = useCreateApiData<Inputs>({ endpoint: '/comments/create', revalidateKey: [['/comments'], ['/tickets', ticketId]] })

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data, e) => {
    const newComment = {
      content: data?.content,
      ticket: ticketId,
      isSolution: false,
    }
    try {
      const res = await mutateAsync(newComment)
      console.log('success comment')
      e?.target.reset()
      return res
    } catch (error) {
      console.log('new comment error', error)
    }
  }, [mutateAsync])
  return { onSubmit: onSubmit, isPending, isSuccess, isError }

}
