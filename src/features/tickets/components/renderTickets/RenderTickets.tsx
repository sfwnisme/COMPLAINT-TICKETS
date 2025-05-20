import Grid from '../../../../components/grid/Grid'
import { ITicket } from '../../../../types/types'
import Ticket from '../ticket/Ticket'

type Props = {
  tickets: ITicket[]
}

export default function RenderTickets({ tickets = [] }: Props) {
  return (
    <Grid>
      {
        tickets?.map((ticket: ITicket) => (
          <Ticket ticket={ticket} key={ticket?._id} />
        ))
      }
    </Grid>
  )
}