import Skeleton from '../../../../components/skeleton/Skeleton'
import Style from './FloatTicketInfo.module.css'

export default function FloatTicketInfoSkeleton() {

  return (
    <div className={Style['float-ticket__info']}>
      <span className={Style['float-ticket__info__id']}>
        <p>Ticket Id</p>
        <Skeleton />
      </span>
      <span className={Style['float-ticket__info__department']}>
        <p>Department</p>
        <Skeleton />
      </span>
      <span className={Style['float-ticket__info__tags']}>
        <p>Tags</p>
        <Skeleton width='60px' />
      </span>
      <span className={Style['float-ticket__info__tags']}>
        <p>Priority</p>
        <Skeleton width='60px' />
      </span>
    </div>
  )
}