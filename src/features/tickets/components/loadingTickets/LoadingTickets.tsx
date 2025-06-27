import TicketV2Skeleton from '../ticketV2/TicketV2Skeleton'
import GridStyle from '../renderTickets/RenderTickets.module.css'
import ListStyle from '../renderTicketsV2/RenderTicketsV2.module.css'
export default function LoadingTickets() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(arr)
  const list = window.localStorage.getItem('activeLayout') === 'list'
  return (
    <div className={`${list? ListStyle['render-tickets-v2']: GridStyle['render-tickets']}`}>
      {
        arr.map((_) => (
          <TicketV2Skeleton key={_} />
        ))
      }
    </div>
  )
}
