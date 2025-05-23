import Skeleton from "../../../../components/skeleton/Skeleton"
import Style from './StatusBar.module.css'


export default function StatusBarSkeleton() {

  return (
    <div className={Style['status-bar']}>
      <span className={`${Style['status-bar__status']}`}>
        <Skeleton height="16px" />
      </span>
      <span className={`${Style['status-bar__status']}`}>
        <Skeleton height="16px" />
      </span>
      <span className={`${Style['status-bar__status']}`}>
        <Skeleton height="16px" />
      </span>
      <span className={`${Style['status-bar__status']}`}>
        <Skeleton height="16px" />
      </span>
    </div>
  )
}