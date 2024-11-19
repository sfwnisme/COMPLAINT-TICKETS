import Ticket from '../../../components/ticket/Ticket.tsx'
import S from './Tickets.module.css'
type Props = {}

export default function Tickets({ }: Props) {
  return (
    <div>
      Tickets Page
      <div className={S.tickets}>
        <Ticket type='complaint' />
        <Ticket type='suggestion' />
        <Ticket type='inquiry' />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div >
  )
}