import FloatTicket from '../../../features/tickets/components/floatTicket/FloatTicket.tsx';
import { useFloatTicket } from '../../../store/ticket.store.ts';
import RenderTicketsContent from '../../../features/tickets/components/renderTicketsContent/RenderTicketsContent.tsx';
import TicketPageInsights from '../../../features/tickets/components/ticketsPageInsights/TicketsPageInsights.tsx';
import PageHeader from '../../../components/pageHeader/PageHeader.tsx';

export default function Tickets() {
  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  return (
    <div>
      <TicketPageInsights />
      <PageHeader title='Tickets' button='Create Ticket' href='/dashboard/tickets/create' />
      <RenderTicketsContent />
      {isFloatTicketVisible ? <FloatTicket /> : null}
    </div >
  )
}
