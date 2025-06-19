import Skeleton from '../../../../components/skeleton/Skeleton'
import UserChipSkeleton from '../../../../components/userChip/UserChipSkeleton'
import Style from './FloatTicketAuthor.module.css'

export default function FloatTicketAuthorSkeleton() {
  return (
    <div className={Style['float-ticket-author']}>
      <div className={Style['float-ticket-author__author']}>
        <UserChipSkeleton />
      </div>
      <div className={Style['float-ticket-author__button']}>
        <Skeleton height='20px' width='80px' />
      </div>
    </div>
  )
}
