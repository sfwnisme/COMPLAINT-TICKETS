import { TStatus } from '../../types'
import { TICKET_STATUS } from '../../../../constraints/constraints'
import Style from './StatusBar.module.css'
import { Check } from 'lucide-react'
import { useCallback } from 'react'

type Props = {
  currentStatus: TStatus
}

export default function StatusBar({ currentStatus }: Readonly<Props>) {
  const isStatusCompleted = useCallback((status: TStatus) => {
    return TICKET_STATUS.indexOf(currentStatus) > TICKET_STATUS.indexOf(status)
  }, [currentStatus])

  const isCurrentStatus = useCallback((status: TStatus) => {
    return TICKET_STATUS.indexOf(currentStatus) === TICKET_STATUS.indexOf(status)
  }, [currentStatus])

  const statusList = TICKET_STATUS.map((status) => (
    <span key={status}
      className={`${Style['status-bar__status']} ${isCurrentStatus(status) && Style['status-bar__active']} ${isStatusCompleted(status) && Style['status-bar__completed']}`}>
      {isStatusCompleted(status) && <Check size={12} />}
      {status}
    </span>
  ))
  return (
    <div className={Style['status-bar']}>
      {statusList}
    </div>
  )
}