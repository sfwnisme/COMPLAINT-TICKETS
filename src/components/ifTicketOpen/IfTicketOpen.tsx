import React from 'react'
import useGetSingleApiData from '../../hooks/use-get-single-api-data'
import { ITicket } from '../../types/types'

type Props = {
  children: React.ReactNode,
  fallback?: React.ReactNode,
  ticketId: string
}

export default function IfTicketOpen({ children, fallback = null, ticketId }: Readonly<Props>) {
  const ticket = useGetSingleApiData<ITicket>({ endpoint: '/tickets', id: ticketId })

  if (!ticket?.data) {
    return null
  }

  if (ticket.data.status === 'resolved' || ticket.data.status === 'closed') {
    return fallback
  }

  return <>{children}</>
}