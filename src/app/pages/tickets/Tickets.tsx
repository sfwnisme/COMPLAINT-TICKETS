import { useState } from 'react';
import { TTicketTypes } from '../../../components/defintions.components.ts';
import Ticket from '../../../components/ticket/Ticket.tsx'
import Title from '../../../components/title/Title.tsx'
import FloatTicket from '../../../features/tickets/FloatTicket.tsx';
import useGetAllData from '../../../hooks/useGetAllData.tsx';
import { ITicket } from '../../../types/ticket.types.ts';
import S from './Tickets.module.css'
import useBearsStore from '../../../store/store.zustand.ts';



export default function Tickets() {
  const [isVisible, setIsVisible] = useState(false)
  const zustandIncrement = useBearsStore()
  console.log('zustandIncrement', zustandIncrement)
  const { data, isLoading, isSuccess, isError, error } = useGetAllData('/tickets')
  console.log('==========================', data)
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
    />
  ))

  return (
    <div>
      <FloatTicket
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Title text='Tickets' />
      <div className={S.tickets}>
        {ticketsContent}
      </div>
    </div >
  )
}
