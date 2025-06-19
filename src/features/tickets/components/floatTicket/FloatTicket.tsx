import { useEffect } from 'react'
import { useFloatTicket } from '../../../../store/ticket.store'
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
import Can from '../../../../components/can/Can'
import TicketIfOpen from '../../../../components/ticketIfOpen/TicketIfOpen'
import Alert from '../../../../components/alert/Alert'

export default function FloatTicket() {

  const isFloatTicketVisible = useFloatTicket((state) => state.isFloatTicketVisible)
  const ticketId = useFloatTicket((state) => state.ticketId)
  const { data: ticket, isLoading } = useGetSingleTicket(ticketId)
  console.log('ticket', ticket)

  useEffect(() => {
    const body = document.body
    body.style.overflow = isFloatTicketVisible ? 'hidden' : 'auto'
    return () => {
      body.style.overflow = "auto"
    }
  }, [isFloatTicketVisible])

  if (!ticket || isLoading) {
    return <FloatTicketSkeleton />
  }

  return (
    <div className={Style["float-ticket__overlay"]}>
      <div className={Style['float-ticket']}>
        <FloatTicketHeader title={ticket.title} />
        <FloatTicketAuthor ticketId={ticket._id} name={ticket?.createdBy?.name ?? "Deleted User"} createdAt={ticket.createdAt ?? ""} />
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
        <TicketIfOpen ticketId={ticket?._id} fallback={<Alert visible variant={ticket.status === 'closed' ? 'danger' : 'success'}>
          {ticket.status === 'closed' && 'This ticket is closed'}
          {ticket.status === 'resolved' && 'This ticket is resolved'}
        </Alert>}>
          <Can permission='canEdit' route='comment'>
            <CreateCommentForm ticketId={ticketId} />
          </Can>
        </TicketIfOpen>
      </div>
    </div >
  )
}