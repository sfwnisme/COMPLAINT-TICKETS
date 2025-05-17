import { useMemo } from 'react';
import Title from '../../../components/title/Title.tsx'
import FloatTicket from '../../../features/tickets/components/floatTicket/FloatTicket.tsx';
import { useFloatTicket } from '../../../store/ticket.store.ts';
import LoadingTickets from '../../../features/tickets/components/loadingTickets/LoadingTickets.tsx';
import ErrorTickets from '../../../features/tickets/components/errorTickets/ErrorTickets.tsx';
import NoTickets from '../../../features/tickets/components/noTickets/NoTickets.tsx';
import RenderTickets from '../../../features/tickets/components/renderTickets/RenderTickets.tsx';
import useGetTickets from '../../../features/tickets/hooks/use-get-tickets.ts';

export default function Tickets() {
  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const tickets = useGetTickets()

  const content = useMemo(() => {
    if (tickets.isLoading) return <LoadingTickets />
    if (tickets.isError) return <ErrorTickets error={tickets.error.response?.data.msg ?? ''} />
    if (tickets.data?.length === 0) return <NoTickets />
    if (tickets.isSuccess) return <RenderTickets tickets={tickets?.data} />
  },
    [
      tickets.data,
      tickets.isLoading,
      tickets.isSuccess,
      tickets.isError,
      tickets.error
    ])

  return (
    <div>
      {isFloatTicketVisible && tickets.isSuccess ? <FloatTicket /> : null}
      <Title text='Tickets' />
      {content}
    </div >
  )
}
