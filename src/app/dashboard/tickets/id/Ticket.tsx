import TicketContainer from '../../../../features/tickets/components/ticketPage/ticketContainer/TicketContainer'
import { useParams } from 'react-router-dom'
import useGetSingleTicket from '../../../../features/tickets/hooks/use-get-single-ticket'
import Style from './Ticket.module.css'
import { ITicket } from '../../../../types/types'

export default function Ticket() {
  const {ticketId} = useParams()
  const ticket = useGetSingleTicket(ticketId ?? "")
  const ticketData = ticket?.data ?? {} as ITicket
  console.log(ticket?.data)
  return (
    <div className={Style.ticket}><TicketContainer ticket={ticketData} /></div>
  )
}
