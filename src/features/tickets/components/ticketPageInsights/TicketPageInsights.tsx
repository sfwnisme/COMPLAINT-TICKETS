import useGetTickets from '../../hooks/use-get-tickets'
import useGetApiDataByQuery from '../../../../hooks/use-get-api-data-by-query'
import Style from './TicketPageInsights.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'
import { ITicket } from '../../../../types/types'

export default function TicketsInfo() {
  const tickets = useGetTickets()
  const inProgressTickets = useGetApiDataByQuery<ITicket[]>({ endpoint: '/tickets', query: '?status=in-progress' })
  const criticalTickets = useGetApiDataByQuery<ITicket[]>({ endpoint: '/tickets', query: '?priority=critical' })
  const resolvedTickets = useGetApiDataByQuery<ITicket[]>({ endpoint: '/tickets', query: '?status=resolved' })
  return (
    <div className={Style['tickets-header']}>
      <div className={`${Style['tickets-header__card']} ${Style['tickets-header__card--tickets']}`}>
        <h3>Tickets</h3>
        <span>{tickets.data?.length}</span>
        {tickets?.isLoading && <Skeleton height='16px' />}
      </div>
      <div className={`${Style['tickets-header__card']} ${Style['tickets-header__card--inprogress']}`}>
        <h3>In Progress</h3>
        <span>{inProgressTickets.data?.length}</span>
        {inProgressTickets?.isLoading && <Skeleton height='16px' variant='info' />}
      </div>
      <div className={`${Style['tickets-header__card']} ${Style['tickets-header__card--critical']}`}>
        <h3>Critical</h3>
        <span>{criticalTickets.data?.length}</span>
        {criticalTickets?.isLoading && <Skeleton height='16px' variant='danger' />}
      </div>
      <div className={`${Style['tickets-header__card']} ${Style['tickets-header__card--resolved']}`}>
        <h3>Resolved</h3>
        <span>{resolvedTickets.data?.length}</span>
        {resolvedTickets?.isLoading && <Skeleton height='16px' variant='success' />}
      </div>
    </div>
  )
}