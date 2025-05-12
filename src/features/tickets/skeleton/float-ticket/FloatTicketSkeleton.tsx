import Skeleton from '../../../../components/skeleton/Skeleton'
import Spacer from '../../../../components/spacer/Spacer'
import CommentSkeleton from '../comment/CommentSkeleton'
import CreateCommentFormSkeleton from '../create-comment-form-skeleton/CreateCommentFormSkeleton'
import Style from './FloatTicketSkeleton.module.css'

const array: number[] = [1, 3, 4]

function Conversation() {

  const renderCommentsList = array?.map((_) => {
    return (
      <CommentSkeleton key={_} />
    )
  })

  return (
    <div className={Style['float-ticket__conversation-tab']}>
      <div className={`${Style["float-ticket__comments"]}`}>
        <div className={Style['float-ticket__description']}>
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
         <div className={Style['float-ticket__createdby']}>
          <Skeleton width='40px' height='40px' />
          {/* <Avatar size='md' name={getSingleTicket?.data?.createdBy?.name} /> */}
          <div className={Style['float-ticket__createdby-info']}>
            <Skeleton height='15px' width='20%'/>
            <Spacer />
            <Skeleton height='12px' width='30%'/>
            {/* <p className={`${Style['float-ticket__createdby__name']}`}>{getSingleTicket?.data?.createdBy?.name}</p> */}
            {/* <p className={`${Style['float-ticket__createdby__date']}`}>{formatedDate(getSingleTicket?.data?.createdAt)}</p> */}
          </div>
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
          <div className={`${Style["float-ticket__conversation"]}`}>
            {/* <Skeleton /> */}
            {/* <Conversation comments={comments} description={getSingleTicket?.data?.description} /> */}
            <Conversation />
            {/* <CommentSkeleton /> */}
          </div>
        </div>
        <CreateCommentFormSkeleton />
      </div>
    </div >
  )
}