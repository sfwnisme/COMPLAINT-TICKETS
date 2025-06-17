import React from 'react'
import useGetSingleApiData from '../../hooks/use-get-single-api-data'
import { ITicket } from '../../types/types'

type Props = {
  children: React.ReactNode,
  ticketId: string
}

export default function TicketIfOpen({ children, ticketId }: Readonly<Props>) {
  const ticket = useGetSingleApiData<ITicket>({ endpoint: '/tickets', id: ticketId })

  if (!ticket?.data) {
    return null
  }

  if (ticket.data.status === 'resolved' || ticket.data.status === 'closed') {
    return null
  }

  return <>{children}</>
}