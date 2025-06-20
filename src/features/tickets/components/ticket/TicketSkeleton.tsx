import S from './Ticket.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'

export default function TicketSkeleton() {
  return (
    <div className={`${S.ticket}`}>
      <div className={S['ticket__header']}>
        <div className={S['ticket__settings']}>
          <div className={S['ticket__check']}>
            <Skeleton height='15px' width='15px' />
          </div>
        </div>
        <h3 className={S['ticket__title']}>
          <Skeleton height='19px' />
        </h3>
        <Skeleton width='40px' height='19px' />
      </div >
      <div className={S["ticket__body"]}>
        <Skeleton height='15px' width='80px' />
        <Skeleton height='15px' width='90px' />
        <Skeleton height='15px' width='120px' />
        <Skeleton height='15px' width='150px' />
      </div>
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__footer--left-side"]}>
          <div className={S["ticket__department"]}>
            <Skeleton width='70px' height='16px' />
          </div>
          <div className={S["ticket__priority"]}>
            <Skeleton width='50px' height='16px' />
          </div>
          <div className={S["ticket__status"]}>
            <Skeleton width='40px' height='16px' />
          </div>
        </div>
        <Skeleton width='20px' height='20px' />
        <Skeleton width='50px' height='16px' />
      </div>
    </div >
  )
}
