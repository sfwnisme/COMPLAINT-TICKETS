import Style from './FloatTicet.module.css'
import { X } from 'lucide-react'
import Button from '../../../components/button/Button'
import { useEffect } from 'react'
// import { useFloatTicket } from '../../../store/store.zustand'
import { IComment, ITag, ITicket } from '../../../types/ticket.types'
import Badge from '../../../components/badge/Badge'
import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { TICKET_PRIORITY_COLORS, TICKET_STATUS_COLORS } from '../../../constraints/constraints'
import useGetArrayByIdApiData from '../../../hooks/use-get-array-by-id-api-data'
import Alert from '../../../components/alert/Alert'
import Comment from '../comment/Comment'
import CreateCommentForm from '../forms/create-comment-form/CreateCommentForm'
import FloatTicketSkeleton from '../skeleton/float-ticket/FloatTicketSkeleton'
import { Avatar } from '../../../components'
import Spacer from '../../../components/spacer/Spacer'
import { formatedDate } from '../../../libs/formated-date'
import { useFloatTicket } from '../../../store/ticket.store'


function Conversation({ comments = [], description = "" }: { comments: IComment[], description: string }) {

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
    <div className={Style['float-ticket__conversation-tab']}>
      <div className={`${Style["float-ticket__comments"]}`}>
        <div className={Style['float-ticket__description']}>{description}</div>
        {comments?.length > 0 ? renderCommentsList :
          <Alert visible variant='info'>No comments Yet</Alert>
        }
      </div>
    </div>
  )
}

export default function FloatTicket() {

  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  const ticketId = useFloatTicket((state) => state.ticketId)
  const getSingleTicket = useGetSingleApiData<ITicket>({ endpoint: '/tickets', id: ticketId })
  const { data: comments, isLoading } = useGetArrayByIdApiData<IComment[]>({ endpoint: '/comments', relatedField: 'ticketId', fieldId: ticketId })
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

  if (isLoading) {
    return <FloatTicketSkeleton />
  }
  console.log(getSingleTicket?.data)
  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={Style['float-ticket']}>
        <div className={Style["float-ticket__header"]}>
          <h2 className={Style['float-ticket__title']}>{getSingleTicket?.data?.title}</h2>
          <Spacer />
          <Button onClick={toggleFloatTicket} size='square' outline>
            <X className={Style['float-ticket__close-icon']} />
          </Button>
        </div>
        <div className={Style['float-ticket__createdby']}>
          <Avatar size='md' name={getSingleTicket?.data?.createdBy?.name} />
          <div className={Style['float-ticket__createdby-info']} id={getSingleTicket?.data?.createdBy?._id}>
            <p className={`${Style['float-ticket__createdby__name']}`}>{getSingleTicket?.data?.createdBy?.name}</p>
            <p className={`${Style['float-ticket__createdby__date']}`}>{formatedDate(getSingleTicket?.data?.createdAt)}</p>
          </div>
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
              <Badge text={getSingleTicket?.data?.status} title={getSingleTicket?.data?.status} variant={TICKET_STATUS_COLORS[getSingleTicket?.data?.status ?? 'open']} key={getSingleTicket?.data?.status} />
            </span>
            {getSingleTicket?.data?.tags && getSingleTicket?.data?.tags?.length > 0 && <span className={Style['float-ticket__tags']}>
              <p>Tags</p>
              <strong>{renderTags}</strong>
            </span>}
            <span className={Style['float-ticket__priority']}>
              <p>Priority</p>
              <Badge text={getSingleTicket?.data?.priority} title={getSingleTicket?.data?.priority} variant={TICKET_PRIORITY_COLORS[getSingleTicket?.data?.priority ?? 'low']} key={getSingleTicket?.data?.priority} />
            </span>
          </div>
        </div>
        <div className={Style['float-ticket__chat']}>
          <div className={`${Style["flaot-ticket__conversation"]}`}>
            <Conversation comments={comments} description={getSingleTicket?.data?.description} />
          </div>
        </div>
        <CreateCommentForm ticketId={ticketId} />
      </div>
    </div >
  )
}