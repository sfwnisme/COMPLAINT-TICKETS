import S from './TicketV2.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'

export default function TicketV2Skeleton() {
  return (
    <div className={`${S.ticket}`}>
      <div className={S['ticket__data']}>
        <div className={S['ticket__header']}>
          <div className={S['ticket__settings']}>
            <div className={S['ticket__check']}>
              <Skeleton width='20px' height='20px' />
            </div>
          </div>
          <h3 className={S['ticket__title']}>
            <Skeleton />
          </h3>
        </div >
        <div className={S["ticket__body"]}>
          <div className={S["ticket__department"]}>
            <Skeleton width='60px' height='16px' />
          </div>
          <div className={S["ticket__priority"]}>
            <Skeleton width='40px' height='16px' />
          </div>
          <div className={S["ticket__status"]}>
            <Skeleton width='40px' height='16px'/>
          </div>
          <Skeleton width='90px' height='16px'/>
          <Skeleton width='100px' height='16px'/>
          <Skeleton width='120px' height='16px'/>
          <Skeleton width='140px' height='16px'/>
        </div>
      </div>
      <div className={S['ticket__actions']}>
        <Skeleton width='25px' height='25px' />
        <Skeleton width='25px' height='25px' />
        <div className={S['ticket__open-float-ticket-btn']}>
          <Skeleton width='30px' height='30px' />
        </div>
      </div>
    </div>
  )
}
