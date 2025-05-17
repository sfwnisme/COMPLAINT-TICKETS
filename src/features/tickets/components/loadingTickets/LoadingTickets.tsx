import Grid from '../../../../components/grid/Grid'
import TicketSkeleton from '../../skeleton/ticketSkeleton/TicketSkeleton'

export default function LoadingTickets() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(arr)
  return (
    <Grid>
      {
        arr.map((_) => (
          <TicketSkeleton key={_} />
        ))
      }
    </Grid>
  )
}
