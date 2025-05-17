import S from '../../components/ticket/Ticket.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'
import Spacer from '../../../../components/spacer/Spacer'

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
          <Spacer />
          <Skeleton height='19px' width='20%' />
        </h3>
        <Skeleton width='40px' height='19px' />
        <div className={S["ticket__header__footer"]}>
          <p className={S["ticket__number"]}>
            <Skeleton height='15px' width='15px' />
            <Skeleton width='100px' height='16px' /></p>
          <div className={S["ticket__assignee"]}>
            <Skeleton height='15px' width='15px' />
            <Skeleton width='120px' height='16px' />
          </div>
          <div className={S["ticket__created-at"]} >
            <Skeleton height='15px' width='15px' />
            <Skeleton width='180px' height='16px' /></div>
        </div >
      </div >
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__footer--left-side"]}>
          <div className={S["ticket__department"]}>
            <Skeleton width='30px' height='16px' />
          </div>
          <div className={S["ticket__priority"]}>
            <Skeleton width='30px' height='16px' />
          </div>
          <div className={S["ticket__status"]}>
            <Skeleton width='30px' height='16px' />
          </div>
        </div>
        <div className={S["ticket__tags"]}>
          <Skeleton width='50px' height='16px' />
          <Skeleton width='40px' height='16px' />
          <Skeleton width='70px' height='16px' />
        </div>
      </div>
    </div >
  )
}
