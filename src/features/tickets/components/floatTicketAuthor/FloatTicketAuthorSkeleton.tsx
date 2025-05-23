import Style from './FloatTicketAuthor.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'
import Spacer from '../../../../components/spacer/Spacer'

export default function FloatTicketAuthorSkeleton() {
  return (
    <div className={Style['float-ticket__createdby']}>
      <Skeleton width='40px' height='40px' />
      <div className={Style['float-ticket__createdby-info']}>
        <Skeleton height='15px' width='20%' />
        <Spacer />
        <Skeleton height='12px' width='30%' />
      </div>
    </div>
  )
}
