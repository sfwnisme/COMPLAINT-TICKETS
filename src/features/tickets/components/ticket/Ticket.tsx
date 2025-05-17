import { Clock, User } from 'lucide-react'
import S from './Ticket.module.css'
import Button from '../../../../components/button/Button'
import Badge from '../../../../components/badge/Badge'
import { ITicket } from '../../../../types/ticket.types'
import { useFloatTicket } from '../../../../store/ticket.store'
import { TICKET_PRIORITY_COLORS, TICKET_STATUS_COLORS } from '../../../../constraints/constraints'
import { TVariants } from '../../../../components/defintions.components'
import { formatedDate } from '../../../../libs/formated-date'
import HelpText from '../../../../components/help-text/HelpText'

export default function Ticket(
  {
    ticket
  }: { ticket: Readonly<ITicket> }
) {
  const { _id, title, createdBy, department, status, priority, tags, createdAt } = ticket

  console.log(tags)
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  const setTicketId = useFloatTicket((state) => state.setTicketId)
  const handleToggleFloatTicket = (id: string) => {
    toggleFloatTicket()
    setTicketId(id)
  }

  const renderTags = tags.map((tag) => (
    <Badge text={tag?.name} title={tag?._id} variant='primary' key={tag._id} customColor={tag?.color} />
  ))

  return (
    <div className={`${S.ticket}`}>
      <div className={S['ticket__header']}>
        <div className={S['ticket__settings']}>
          <div className={S['ticket__check']}>
            <input type='checkbox' title={_id.toString()} />
          </div>
        </div>
        <h3 className={S['ticket__title']}>{title}</h3>
        <Button onClick={() => handleToggleFloatTicket(_id)} size='xs' shape='soft'>open</Button>
        <div className={S["ticket__header__footer"]}>
          <p className={S["ticket__number"]}>#{_id}</p>
          <div className={S["ticket__assignee"]} id={createdBy?._id}><User size={14} strokeWidth={1.6} id={createdBy?._id} />{createdBy?.name}</div>
          <div className={S["ticket__created-at"]} ><Clock size={14} strokeWidth={1.6} /> {formatedDate(createdAt)}</div>
        </div >
      </div >
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__footer--left-side"]}>
          <div className={S["ticket__department"]}>
            <Badge text={department?.title} key={department?._id} />
          </div>

          <div className={S["ticket__priority"]}>
            <Badge text={priority} key={priority} variant={TICKET_PRIORITY_COLORS[priority as TVariants]} />
          </div>
          <div className={S["ticket__status"]}>
            <Badge text={status} key={status} variant={TICKET_STATUS_COLORS[status as TVariants]} />
          </div>
        </div>
        {tags.length > 0 && <div className={S["ticket__tags"]}>
          {renderTags}
          {tags.length > 3 && <HelpText icon='invisible'>and more...</HelpText>}
        </div>}
      </div>
    </div >
  )
}
