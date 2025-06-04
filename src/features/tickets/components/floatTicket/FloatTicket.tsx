import { useEffect } from 'react'
import { useFloatTicket } from '../../../../store/ticket.store'
import { DEFAULT_TICKET } from '../../constraints'
import CreateCommentForm from '../../forms/createCommentForm/CreateCommentForm'
import useGetSingleTicket from '../../hooks/use-get-single-ticket'
import FloatTicketAuthor from '../floatTicketAuthor/FloatTicketAuthor'
import FloatTicketHeader from '../floatTicketHeader/FloatTicketHeader'
import FloatTicketInfo from '../floatTicketInfo/FloatTicketInfo'
import StatusBar from '../ticketStatusBar/TicketStatusBar'
import Style from './FloatTicet.module.css'
import Comments from '../comments/Comments'
import FloatTicketSkeleton from './FloatTicketSkeleton'
import DOMPurify from "dompurify";

export default function FloatTicket() {

  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const ticketId = useFloatTicket((state) => state.ticketId)
  const { data: ticket = DEFAULT_TICKET, isLoading } = useGetSingleTicket(ticketId)
  console.log('ticket', ticket)

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
        <FloatTicketAuthor name={ticket?.createdBy?.name ?? "Deleted User"} createdAt={ticket.createdAt ?? ""} />
        <FloatTicketInfo
          ticketId={ticket._id}
          assignedTo={ticket.assignedTo?.name}
          department={ticket.department}
          tags={ticket.tags}
          priority={ticket.priority} />
        <StatusBar currenStatus={ticket.status ?? "open"} />
        <div className={Style['float-ticket__chat-container']}>
          <div className={Style['float-ticket__chat']}>
            <div className={Style['float-ticket__description']} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ticket?.description ?? '') }} />
            <Comments ticketId={ticketId} />
          </div>
        </div>
        <CreateCommentForm ticketId={ticketId} />
      </div>
    </div >
  )
}