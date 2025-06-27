import { ITicket } from '../../../../types/types'
import TicketV2 from '../ticketV2/TicketV2'
import Style from './RenderTickets.module.css'

type Props = {
  tickets: ITicket[]
}

export default function RenderTickets({ tickets = [] }: Props) {
  return (
      <div className={Style['render-tickets']}>
        {
          tickets?.map((ticket: ITicket) => (
            <TicketV2 ticket={ticket} key={ticket?._id} />
          ))
        }
      </div>
  )
}