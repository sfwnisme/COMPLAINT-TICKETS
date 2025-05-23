import Style from './UserChip.module.css'
import Skeleton from '../skeleton/Skeleton'
import Spacer from '../spacer/Spacer'

export default function UserChipSkeleton() {
  return (
    <div className={Style['user-chip']}>
      <Skeleton width='40px' height='40px' />
      <div className={Style['user-chip__info']}>
        <Skeleton height='15px' width='20%' />
        <Spacer />
        <Skeleton height='12px' width='30%' />
      </div>
    </div >
  )
}