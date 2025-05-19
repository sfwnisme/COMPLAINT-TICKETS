import { Status } from '../../types'
import { TICKET_STATUS } from '../../../../constraints/constraints'
import Style from './StatusBar.module.css'
import { Check } from 'lucide-react'
import { useCallback } from 'react'

type Props = {
  currenStatus: Status
}

export default function StatusBar({ currenStatus }: Readonly<Props>) {
  const isStatusCompleted = useCallback((status: Status) => {
    return TICKET_STATUS.indexOf(currenStatus) > TICKET_STATUS.indexOf(status)
  }, [currenStatus])

  const isCurrenStatus = useCallback((status: Status) => {
    return TICKET_STATUS.indexOf(currenStatus) === TICKET_STATUS.indexOf(status)
  }, [currenStatus])

  const statusList = TICKET_STATUS.map((status) => (
    <span key={status}
      className={`${Style['status-bar__status']} ${isCurrenStatus(status) && Style['status-bar__active']} ${isStatusCompleted(status) && Style['status-bar__completed']}`}>
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