import Title from '../../../components/title/Title.tsx'
import FloatTicket from '../../../features/tickets/components/floatTicket/FloatTicket.tsx';
import { useFloatTicket } from '../../../store/ticket.store.ts';
import RenderTicketsContent from '../../../features/tickets/components/renderTicketsContent/RenderTicketsContent.tsx';

export default function Tickets() {
  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  return (
    <div>
      {isFloatTicketVisible ? <FloatTicket /> : null}
      <Title text='Tickets' />
      <RenderTicketsContent />
    </div >
  )
}
