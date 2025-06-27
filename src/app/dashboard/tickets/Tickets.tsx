import FloatTicket from '../../../features/tickets/components/floatTicket/FloatTicket.tsx';
import { useFloatTicket } from '../../../store/ticket.store.ts';
import RenderTicketsContent from '../../../features/tickets/components/renderTicketsContent/RenderTicketsContent.tsx';
import TicketPageInsights from '../../../features/tickets/components/ticketsPageInsights/TicketsPageInsights.tsx';
import PageHeader from '../../../components/pageHeader/PageHeader.tsx';
import Can from '../../../components/can/Can.tsx';

export default function Tickets() {
  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  return (
    <div>
      <TicketPageInsights />
      <Can permission='canCreate' route='ticket' fallback={<PageHeader title="Tickets" />}>
        <PageHeader title='Tickets' button='Create Ticket' href='/dashboard/tickets/create' />
      </Can>
      <RenderTicketsContent />
      {isFloatTicketVisible ? <FloatTicket /> : null}
    </div >
  )
}
