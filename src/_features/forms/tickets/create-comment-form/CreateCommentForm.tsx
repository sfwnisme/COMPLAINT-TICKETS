import Style from './CreateCommentForm.module.css'
import { SubmitHandler, useForm } from "react-hook-form"
import useCreateApiData from "../../../../hooks/use-create-api-data"
import Input from "../../../../components/input/Input"
import Button from "../../../../components/button/Button"
import { zodResolver } from '@hookform/resolvers/zod'
import { createCommentSchema } from '../../../../validation/ticket.validation'
import { z } from 'zod'

type Inputs = z.infer<typeof createCommentSchema>

export default function CreateCommentForm({ ticketId }: { ticketId: string }) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(createCommentSchema),
    mode: 'all'
  })
  const { mutateAsync, isPending } = useCreateApiData<Inputs>({ endpoint: '/comments/create', revalidateKey: '/comments' })

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
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
  }
  console.log(watch())
  const disableButton = isPending || !isValid || getValues('content').length <= 5

  return (
    <form className={`${Style['ticket-page__add-comment']}`} onSubmit={handleSubmit(onSubmit)}>
      <Input type='text' placeholder='Comment...'
        {...register('content')}
        message={errors.content?.message}
      />
      <Button shape='soft' size='lg' disabled={disableButton}>{isPending ? 'Sending...' : 'Send'}</Button>
    </form>
  )
}