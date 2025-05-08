import Ticket from '../../../components/ticket/Ticket.tsx'
import Title from '../../../components/title/Title.tsx'
import FloatTicket from '../../../features/tickets/float-ticket/FloatTicket.tsx';
import useGetAllData from '../../../hooks/useGetAllData.tsx';
import { ITicket } from '../../../types/ticket.types.ts';
import S from './Tickets.module.css'
import { useFloatTicket } from '../../../store/store.zustand.ts';



export default function Tickets() {
  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const { data, isLoading, isSuccess, isError, error } = useGetAllData('/tickets')
  const ticketsContent = data?.map((ticket: ITicket) => (
    <Ticket
      key={ticket._id}
      title={ticket?.title}
      createdBy={ticket?.createdBy}
      department={ticket?.department}
      status={ticket.status}
      priority={ticket.priority}
      tags={ticket.tags}
      createdAt={ticket.createdAt}
      _id={ticket._id}
      isLoading={isLoading}
    />
  ))

  return (
    <div>
      {isFloatTicketVisible && isSuccess ? <FloatTicket /> : null}
      <Title text='Tickets' />
      <div className={S.tickets}>
        {ticketsContent}
      </div>
    </div >
  )
}
