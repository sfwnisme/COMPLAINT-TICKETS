import Grid from '../../../../../components/grid/Grid'
import Ticket from '../../ticket/Ticket'
import { ITicket } from '../../../../../types/types'


type Props = {
  tickets: ITicket[]
}
export default function RenderTickets({ tickets = [] }: Props) {
  return (
    <Grid maxWidth='290'>
      {
        tickets?.map((ticket) => (
          <Ticket ticket={ticket} key={ticket?._id} />
        ))
      }
    </Grid>
  )
}