import { ITicket } from '../../../../types/types'
import TicketV2 from '../ticketV2/TicketV2'
import Style from './RenderTicketsV2.module.css'

type Props = {
  tickets: ITicket[]
}

export default function RenderTicketsV2({ tickets = [] }: Props) {
  return (
    <div className={Style['render-tickets-v2']}>
      {
        tickets?.map((ticket: ITicket) => (
          <TicketV2 ticket={ticket} key={ticket?._id} />
        ))
      }
    </div>
  )
}