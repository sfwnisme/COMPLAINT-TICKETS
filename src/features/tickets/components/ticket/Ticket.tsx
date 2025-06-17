import { Clock, Contact, PanelLeftOpen, Trash, User } from 'lucide-react'
import S from './Ticket.module.css'
import Button from '../../../../components/button/Button'
import Badge from '../../../../components/badge/Badge'
import { useFloatTicket } from '../../../../store/ticket.store'
import { TICKET_PRIORITY_COLORS, TICKET_STATUS_COLORS } from '../../../../constraints/constraints'
import { formateDate } from '../../../../libs/formate-date'
import { ITicket } from '../../../../types/types'
import useDeleteApiData from '../../../../hooks/use-delete-api-data'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'
import { NavLink } from 'react-router-dom'

export default function Ticket(
  { ticket }: Readonly<{ ticket: ITicket }>
) {
  const { mutateAsync: deleteTicket, isPending } = useDeleteApiData({ endpoint: '/tickets', revalidateKey: ['/tickets'] })
  const handleDeleteTicket = async (ticketId: string) => {
    await deleteTicket(ticketId)
  }
  const currentUser = useGetCurrentUser()
  const { _id, title, createdBy, assignedTo, department, status, priority, tags, createdAt } = ticket

  console.log(tags)
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  const setTicketId = useFloatTicket((state) => state.setTicketId)
  const handleToggleFloatTicket = (id: string) => {
    toggleFloatTicket()
    setTicketId(id)
  }

  return (
    <div className={`${S.ticket}`} id={_id}>
      <div className={S['ticket__header']}>
        <div className={S['ticket__settings']}>
          <div className={S['ticket__check']}>
            <input type='checkbox' title={_id.toString()} />
          </div>
        </div>
        <h3 className={S['ticket__title']}>{title}</h3>
        <Button onClick={() => handleToggleFloatTicket(_id)} size='square' shape='none' variant='info' title='open side view' ><PanelLeftOpen size={18} strokeWidth={1.6} /></Button>
        <div className={S["ticket__header__footer"]}>
          <div className={S["ticket__assignee"]} id={createdBy?._id}><User size={14} strokeWidth={1.6} id={createdBy?._id} />{createdBy?.name}</div>
          <div hidden={!assignedTo?._id} className={S["ticket__assignee"]} id={assignedTo?._id}><Contact size={14} strokeWidth={1.6} id={assignedTo?._id} />{createdBy?.name}</div>
          <div className={S["ticket__created-at"]} ><Clock size={14} strokeWidth={1.6} /> {formateDate(createdAt)}</div>
        </div >
      </div >
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__footer--left-side"]}>
          {department &&
            <div className={S["ticket__department"]}>
              <Badge text={department?.title} dot key={department?._id} />
            </div>
          }
          <div className={S["ticket__priority"]}>
            <Badge text={priority} key={priority} dot variant={TICKET_PRIORITY_COLORS[priority]} />
          </div>
          <div className={S["ticket__status"]}>
            <Badge text={status} key={status} dot variant={TICKET_STATUS_COLORS[status]} />
          </div>
        </div>
        {
          currentUser.data?.role === 'admin' &&
          <Button variant='danger' shape='none' size='square' onClick={() => handleDeleteTicket(_id)}>
            {isPending ? <LoadingIcon /> : <Trash size={15} strokeWidth={1.5} />}
          </Button>
        }
        <NavLink to={'/dashboard/tickets/' + ticket?._id}>
          <Button size='xs' shape='soft'>Open</Button>
        </NavLink>
      </div>
    </div >
  )
}
