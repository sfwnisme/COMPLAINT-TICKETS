import { z } from 'zod'
import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form'
import { useCallback } from 'react'
import { createCommentSchema } from '../schemas/ticket.schema'
import axios from 'axios'

type Inputs = z.infer<typeof createCommentSchema>
export default function useCreateComment(ticketId: string = "") {
  const createComment = useCreateApiData<Inputs>({ endpoint: '/comments/create', revalidateKey: [['/comments'], ['/tickets', ticketId]] })

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data, e) => {
    const newComment = {
      content: data?.content,
      ticket: ticketId,
      isSolution: false,
    }
    try {
      const res = await createComment.mutateAsync(newComment)
      console.log('success comment')
      e?.target.reset()
      return res
    } catch (error) {
      console.log('new comment error', error)
    }
  }, [createComment.mutateAsync])
  let typedError;
  if (axios.isAxiosError(createComment.error)) {
    typedError = createComment.error;
  }
  const errorMessage = Array.isArray(typedError?.response?.data?.msg)
    ? typedError?.response?.data?.msg.map((m: { path: string, msg: string }) => m.path + ":" + m.msg)
    : typedError?.response?.data?.msg
  const successMessage = 'The ticket created successfull, you can now log in to activeate the account';


  return { onSubmit: onSubmit,errorMessage, successMessage, ...createComment }

}
