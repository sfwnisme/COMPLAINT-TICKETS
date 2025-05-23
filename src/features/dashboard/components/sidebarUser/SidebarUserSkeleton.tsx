import Skeleton from '../../../../components/skeleton/Skeleton'
import Spacer from '../../../../components/spacer/Spacer'
import Style from './SidebarUser.module.css'

export default function SidebarUserSkeleton() {
  return (
    <div className={Style['sidebar__user']}>
      <Skeleton width='40px' variant='info' height='40px' />
      <div className={Style['sidebar__user__info']}>
        <Skeleton width='50%' variant='info' height='14px' />
        <Spacer />
        <Skeleton width='80%' variant='info' height='12px' />
      </div>
      <Skeleton width='20px' variant='info' height='20px' />
    </div>
  )
}
