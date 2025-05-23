import Style from './CreateCommentForm.module.css'
import Input from "../../../../components/input/Input"
import Button from "../../../../components/button/Button"
import useCreateCommentForm from '../../hooks/use-create-comment-form-validation'
import useCreateComment from '../../hooks/use-create-comment'


export default function CreateCommentForm({ ticketId }: { ticketId: string }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useCreateCommentForm()
  const { onSubmit, isPending } = useCreateComment(ticketId)

  console.log(getValues('content'))
  const disableButton = isPending || !isValid

  return (
    <form className={`${Style['ticket-page__add-comment']}`} onSubmit={handleSubmit(onSubmit)}>
      <Input type='text' placeholder='Comment...'
        {...register('content')}
        message={errors.content?.message}
      />
      <Button size='lg' disabled={disableButton}>{isPending ? 'Sending...' : 'Send'}</Button>
    </form>
  )
}