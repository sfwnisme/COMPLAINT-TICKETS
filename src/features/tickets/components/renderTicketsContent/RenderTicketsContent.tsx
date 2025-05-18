import { useMemo } from 'react'
import useGetTickets from '../../hooks/use-get-tickets'
import LoadingTickets from '../loadingTickets/LoadingTickets'
import ErrorTickets from '../errorTickets/ErrorTickets'
import NoTickets from '../noTickets/NoTickets'
import RenderTickets from '../renderTickets/RenderTickets'

export default function RenderTicketsContent() {
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
  return content
}
