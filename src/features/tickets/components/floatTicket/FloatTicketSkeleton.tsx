import Skeleton from '../../../../components/skeleton/Skeleton'
import Spacer from '../../../../components/spacer/Spacer'
import FloatTicketHeaderSkeleton from '../floatTicketHeader/FloatTicketHeaderSkeleton'
import StatusBarSkeleton from '../statusBar/StatusBarSkeleton'
import CommentSkeleton from '../comment/CommentSkeleton'
import CreateCommentFormSkeleton from '../../forms/create-comment-form/CreateCommentFormSkeleton'
import Style from './FloatTicet.module.css'
import FloatTicketAuthorSkeleton from '../floatTicketAuthor/FloatTicketAuthorSkeleton'
import FloatTicketInfoSkeleton from '../floatTicketInfo/FloatTicketInfoSkeleton'

export default function FloatTicketSkeleton() {

  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={Style['float-ticket']}>
        <FloatTicketHeaderSkeleton />
        <FloatTicketAuthorSkeleton />
        <FloatTicketInfoSkeleton />
        <StatusBarSkeleton />
        <div className={Style['float-ticket__chat']}>
          <div className={Style['float-ticket__description']}>
            <Skeleton width='90%' height='16px' />
            <Spacer />
            <Skeleton width='40%' height='16px' />
          </div>
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
        <CreateCommentFormSkeleton />
      </div>
    </div >
  )
}