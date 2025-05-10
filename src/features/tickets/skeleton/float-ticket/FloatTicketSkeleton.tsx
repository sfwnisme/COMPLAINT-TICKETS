import Skeleton from '../../../../components/skeleton/Skeleton'
import CommentSkeleton from '../comment/CommentSkeleton'
import CreateCommentFormSkeleton from '../create-comment-form-skeleton/CreateCommentFormSkeleton'
import Style from './FloatTicketSkeleton.module.css'

const array: number[] = [1, 3, 4]

function ConversationTab() {

  const renderCommentsList = array?.map((_) => {
    return (
      <CommentSkeleton key={_} />
    )
  })

  return (
    <div className={Style['ticket-page__conversation-tab']}>
      <div className={`${Style["ticket-page__comments"]}`}>
        <div className={Style['ticket-page__description']}>
          <Skeleton />
        </div>
        {renderCommentsList}
      </div>
    </div>
  )
}

export default function FloatTicketSkeleton() {

  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={`${Style['float-ticket']}`}>
        <div className={Style["float-ticket__header"]}>
          <Skeleton width='30%' />
          <Skeleton width='30px' height='30px' />
        </div>
        <div className={Style["float-ticket__body"]}>
          <div className={Style['float-ticket__settings']}>
            <span className={Style['float-ticket__id']}>
              <p>Ticket Id</p>
              <strong><Skeleton /></strong>
            </span>
            <span className={Style['float-ticket__department']}>
              <p>Department</p>
              <Skeleton />
            </span>
            <span className={Style['float-ticket__status']}>
              <p>Status</p>
              <Skeleton />
            </span>
            <span className={Style['float-ticket__tags']}>
              <p>Tags</p>
              <Skeleton />
            </span>
            <span className={Style['float-ticket__priority']}>
              <p>Priority</p>
              <Skeleton />
            </span>
          </div>
        </div>
        <div className={Style['float-ticket__chat']}>
          <div className={`${Style["ticket-page__comments"]}`}>
            {/* <Skeleton /> */}
            {/* <ConversationTab comments={comments} description={getSingleTicket?.data?.description} /> */}
            <ConversationTab />
            {/* <CommentSkeleton /> */}
          </div>
        </div>
        <CreateCommentFormSkeleton />
      </div>
    </div >
  )
}