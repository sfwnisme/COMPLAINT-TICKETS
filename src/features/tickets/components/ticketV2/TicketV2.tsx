import { Clock, Contact, ExternalLink, PanelLeftOpen, Timer, Trash, User } from 'lucide-react'
import S from './TicketV2.module.css'
import Button from '../../../../components/button/Button'
import Badge from '../../../../components/badge/Badge'
import { useFloatTicket } from '../../../../store/ticket.store'
import { TICKET_PRIORITY_COLORS, TICKET_STATUS_COLORS } from '../../../../constraints/constraints'
import { ITicket } from '../../../../types/types'
import useDeleteApiData from '../../../../hooks/use-delete-api-data'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import { NavLink } from 'react-router-dom'
import Can from '../../../../components/can/Can'
import dayjs from 'dayjs'
import { useState } from 'react'


export default function TicketV2(
  { ticket }: Readonly<{ ticket: ITicket }>
) {
  const [getTicketId, setGetTicketId] = useState('')
  const { mutateAsync: deleteTicket, isPending: isDeleting } = useDeleteApiData({ endpoint: '/tickets', revalidateKey: ['/tickets'] })
  const handleDeleteTicket = async (ticketId: string) => {
    await deleteTicket(ticketId)
  }
  const { _id, title, createdBy, assignedTo, department, status, priority, tags, createdAt, updatedAt } = ticket

  console.log(tags)
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  const setTicketId = useFloatTicket((state) => state.setTicketId)
  const handleToggleFloatTicket = (id: string) => {
    toggleFloatTicket()
    setTicketId(id)
  }

  return (
    <div className={`${S.ticket}`} id={_id}>
      <div className={S['ticket__data']}>
        <div className={S['ticket__header']}>
          <Can permission='canDelete' route='ticket'>
            <div className={S['ticket__settings']}>
              <div className={S['ticket__check']}>
                <input type='checkbox' title={_id.toString()} />
              </div>
            </div>
          </Can>
          <h3 className={S['ticket__title']}>{title}</h3>
        </div >
        <div className={S["ticket__body"]}>
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
          <div className={S["ticket__author"]} id={createdBy?._id}><User size={14} strokeWidth={1.6} id={createdBy?._id} />{createdBy?.name}</div>
          <div hidden={!assignedTo?._id} className={S["ticket__assignee"]} id={assignedTo?._id}><Contact size={14} strokeWidth={1.6} id={assignedTo?._id} />{assignedTo?.name}</div>
          <div className={S["ticket__created-at"]} title='created at' ><Clock size={14} strokeWidth={1.6} /> {dayjs(createdAt).fromNow()}</div>
          <div className={S["ticket__updated-at"]} title='update at' ><Timer size={14} strokeWidth={1.6} /> {dayjs(updatedAt).fromNow()}</div>
        </div>
      </div>
      <div className={S['ticket__actions']}>
        <Can permission='canDelete' route='ticket'>
          <Button variant='danger' shape='none' size='square' onClick={() => setGetTicketId(_id)} title='delete the ticket'>
            <Trash size={18} strokeWidth={1.5} />
          </Button>
        </Can>
        <NavLink to={'/dashboard/tickets/' + ticket?._id}>
          <Button size='square' shape='none' title='open the ticket page'><ExternalLink size={18} strokeWidth={1.5} color='var(--primary-color-600)' /></Button>

        </NavLink>
        <div className={S['ticket__open-float-ticket-btn']}>
          <Button onClick={() => handleToggleFloatTicket(_id)} size='square' shape='none' variant='primary' title='open side view'><PanelLeftOpen size={18} strokeWidth={1.6} color='var(--primary-color-600)' /></Button>
        </div>
      </div>
      <div className={`${S['ticket__delete-alert']} ${getTicketId && S['ticket__delete-alert--active']}`}>
        <p>Are you sure you want to delete this ticket?</p>
        <div className={S['ticket__delete-alert__actions']}>
          <Button onClick={() => handleDeleteTicket(_id)} size='xs' shape='outline' variant='danger' title='open side view' disabled={isDeleting}>
            {isDeleting && <LoadingIcon />} Delete
          </Button>
          <Button onClick={() => setGetTicketId("")} size='xs' shape='outline' variant='primary' title='open side view' disabled={isDeleting}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}
