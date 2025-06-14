import Style from './CreateCommentFormV2.module.css'
import Button from "../../../../components/button/Button"
import useCreateCommentForm from '../../hooks/use-create-comment-form-validation'
import useCreateComment from '../../hooks/use-create-comment'
import ReactQuill from 'react-quill'
import HelpText from '../../../../components/helpText/HelpText'
import Spacer from '../../../../components/spacer/Spacer'


export default function CreateCommentFormV2({ ticketId }: { ticketId: string }) {
  const {
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { isValid },
  } = useCreateCommentForm()
  const { onSubmit, isPending, isError, errorMessage } = useCreateComment(ticketId)

  console.log(getValues('content'))
  const disableButton = isPending || !isValid
  const onEditorStatChange = (editorState: string) => {
    setValue('content', editorState)
  }
  const editorContent = watch('content')
  return (
    <div>

      <form className={`${Style['create-comment-v2']}`} onSubmit={handleSubmit(onSubmit)}>
        <ReactQuill theme='snow'
          value={editorContent}
          onChange={onEditorStatChange}
        />
        <div className={Style['create-comment-v2__button']}>
          <Button size='lg' disabled={!disableButton}>{isPending ? 'Sending...' : 'Send'}</Button>
        </div>
      </form>
      {isError &&
        <>
          <Spacer />
          <HelpText variant='danger'>{errorMessage}</HelpText>
        </>
      }
    </div>
  )
}