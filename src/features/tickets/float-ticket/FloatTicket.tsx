import Style from './FloatTicet.module.css'
import { X } from 'lucide-react'
import Button from '../../../components/button/Button'
import { useEffect } from 'react'
import { useFloatTicket } from '../../../store/store.zustand'
import { IComment, ITag } from '../../../types/ticket.types'
import Badge from '../../../components/badge/Badge'
import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { TICKET_PRIORITY_COLORS, TICKET_STATUS_COLORS } from '../../../constraints/constraints'
import useGetArrayByIdApiData from '../../../hooks/use-get-array-by-id-api-data'
import Alert from '../../../components/alert/Alert'
import Comment from '../comment/Comment'
import CreateCommentForm from '../../forms/tickets/create-comment-form/CreateCommentForm'


function ConversationTab({ comments, description }: { comments: Omit<IComment[], 'ticket' | 'updatedAt'>, description: string }) {

  const renderCommentsList = comments?.map((comment: IComment) => {
    return (
      <Comment
        key={comment._id}
        _id={comment._id}
        content={comment.content}
        author={comment.author}
        isSolution={comment.isSolution}
        createdAt={comment.createdAt}
      />
    )
  })

  return (
    <div className={Style['ticket-page__conversation-tab']}>
      <div className={`${Style["ticket-page__comments"]}`}>
        <div className={Style['ticket-page__description']}>{description}</div>
        {comments?.length > 0 ? renderCommentsList :
          <Alert visible variant='info'>No comments Yet</Alert>
        }
      </div>
    </div>
  )
}


// type Inputs = {
//   content: string,
//   ticket: string,
//   isSolution: boolean,
// }

// function CreateCommentForm({ ticketId }: { ticketId: string }) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isValid, isDirty, disabled },
//   } = useForm<Inputs>({
//     mode: 'all'
//   })
//   const { mutateAsync, isPending } = useCreateApiData<Inputs>({ endpoint: '/comments/create', revalidateKey: '/comments' })

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     try {
//       const newComment = await mutateAsync(data)
//       console.log('success comment')
//       return newComment
//     } catch (error) {
//       console.log('new comment error', error)
//     }
//   }
//   console.log(watch())

//   return (
//     <form className={`${Style['ticket-page__add-comment']}`} onSubmit={handleSubmit(onSubmit)}>
//       {/* <Avatar /> */}
//       <Input type='text' placeholder='Comment...'
//         {...register('content')}
//       />
//       <input type='hidden' value={ticketId}
//         {...register('ticket')}
//       />
//       <input type='hidden' value="false"
//         {...register('isSolution')}
//       />
//       <Button variant='info' size='lg' disabled={Boolean(watch()?.content?.length < 5) || isPending}>{isPending ? 'Sending...' : 'Send'}</Button>
//     </form>
//   )
// }

export default function FloatTicket() {

  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  const ticketId = useFloatTicket((state) => state.ticketId)
  const getSingleTicket = useGetSingleApiData({ endpoint: '/tickets', id: ticketId })
  const { data: comments } = useGetArrayByIdApiData({ endpoint: '/comments', relatedField: 'ticketId', fieldId: ticketId })
  const renderTags = getSingleTicket?.data?.tags.map((tag: ITag) => (
    <Badge text={tag?.name} title={tag?._id} variant='primary' key={tag._id} customColor={tag?.color} />
  ))

  useEffect(() => {
    const body = document.body
    body.style.overflow = isFloatTicketVisible ? 'hidden' : 'auto'
    return () => {
      body.style.overflow = "auto"
    }
  }, [isFloatTicketVisible])

  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={`${Style['float-ticket']}`}>
        <div className={Style["float-ticket__header"]}>
          <h2 className={Style['float-ticket__title']}>{getSingleTicket?.data?.title}</h2>
          <Button onClick={toggleFloatTicket} size='square' outline>
            <X className={Style['float-ticket__close-icon']} />
          </Button>
        </div>
        <div className={Style["float-ticket__body"]}>
          <div className={Style['float-ticket__settings']}>
            <span className={Style['float-ticket__id']}>
              <p>Ticket Id</p>
              <strong>#{getSingleTicket?.data?._id}</strong>
            </span>
            {getSingleTicket?.data?.department && <span className={Style['float-ticket__department']}>
              <p>Department</p>
              <Badge text={getSingleTicket?.data?.department.title} title={getSingleTicket?.data?.department._id} variant='primary' key={getSingleTicket?.data?.department._id} />
            </span>}
            <span className={Style['float-ticket__status']}>
              <p>Status</p>
              <Badge text={getSingleTicket?.data?.status} title={getSingleTicket?.data?.status} variant={TICKET_STATUS_COLORS[getSingleTicket?.data?.status]} key={getSingleTicket?.data?.status} />
            </span>
            {getSingleTicket?.data?.tags.length > 0 && <span className={Style['float-ticket__tags']}>
              <p>Tags</p>
              <strong>{renderTags}</strong>
            </span>}
            <span className={Style['float-ticket__priority']}>
              <p>Priority</p>
              <Badge text={getSingleTicket?.data?.priority} title={getSingleTicket?.data?.priority} variant={TICKET_PRIORITY_COLORS[getSingleTicket?.data?.priority]} key={getSingleTicket?.data?.priority} />
            </span>
          </div>
        </div>
        <div className={Style['float-ticket__chat']}>
          <div className={`${Style["ticket-page__comments"]}`}>
            <ConversationTab comments={comments} description={getSingleTicket?.data?.description} />
          </div>
        </div>
        <CreateCommentForm ticketId={ticketId} />
      </div>
    </div >
  )
}