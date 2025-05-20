import Style from './FloatTicet.module.css'
import { useEffect } from 'react'
import CreateCommentForm from '../../forms/create-comment-form/CreateCommentForm'
import FloatTicketSkeleton from '../../skeleton/float-ticket/FloatTicketSkeleton'
import { useFloatTicket } from '../../../../store/ticket.store'
import Comments from '../comments/Comments'
import StatusBar from '../statusBar/StatusBar'
import FloatTicketHeader from '../floatTicketHeader/FloatTicketHeader'
import FloatTicketInfo from '../floatTicketInfo/FloatTicketInfo'
import useGetSingleTicket from '../../hooks/use-get-single-ticket'
import { DEFAULT_TICKET } from '../../constraints'
import FloatTicketAuthor from '../floatTicketAuthor/FloatTicketAuthor'

export default function FloatTicket() {

  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const ticketId = useFloatTicket((state) => state.ticketId)
  const { data: ticket = DEFAULT_TICKET, isLoading } = useGetSingleTicket(ticketId)
  console.log(ticket._id)
  console.log(ticket._id)

  useEffect(() => {
    const body = document.body
    body.style.overflow = isFloatTicketVisible ? 'hidden' : 'auto'
    return () => {
      body.style.overflow = "auto"
    }
  }, [isFloatTicketVisible])

  if (isLoading) {
    return <FloatTicketSkeleton />
  }
  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={Style['float-ticket']}>
        <FloatTicketHeader title={ticket.title} />
        <FloatTicketAuthor name={ticket?.createdBy?.name} createdAt={ticket.createdAt ?? ""} />
        <FloatTicketInfo
          ticketId={ticket._id}
          department={ticket.department}
          tags={ticket.tags}
          priority={ticket.priority} />
        <StatusBar currenStatus={ticket.status ?? "open"} />
        <div className={Style['float-ticket__chat']}>
          <div className={Style['float-ticket__description']}>{ticket.description}</div>
          <Comments ticketId={ticketId} />
        </div>
        <CreateCommentForm ticketId={ticketId} />
      </div>
    </div >
  )
}