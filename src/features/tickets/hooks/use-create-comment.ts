import { z } from 'zod'
import { createCommentSchema } from '../../../validation/ticket.validation'
import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form'
import { useCallback } from 'react'

type Inputs = z.infer<typeof createCommentSchema>
export default function useCreateComment(ticketId: string = "") {
  const { mutateAsync, isPending, isSuccess, isError } = useCreateApiData<Inputs>({ endpoint: '/comments/create', revalidateKey: '/comments' })

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
