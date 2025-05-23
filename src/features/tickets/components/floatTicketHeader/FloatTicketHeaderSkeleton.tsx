import Skeleton from '../../../../components/skeleton/Skeleton'
import Style from './FloatTicketHeader.module.css'

export default function FloatTicketHeaderSkeleton() {
  return (
    <div className={Style["float-ticket__header"]}>
      <Skeleton width='30%' />
      <Skeleton width='30px' height='30px' />
    </div>
  )
}