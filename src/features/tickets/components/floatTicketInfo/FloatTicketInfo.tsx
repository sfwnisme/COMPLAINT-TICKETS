import Badge from '../../../../components/badge/Badge'
import { TICKET_PRIORITY_COLORS } from '../../../../constraints/constraints'
import { IDepartment, ITag, Priority } from '../../../../types/types'
import Style from './FloatTicketInfo.module.css'

type Props = {
  ticketId: string,
  department: Omit<IDepartment, 'createdAt' | 'updatedAt'>,
  tags: ITag[],
  priority: Priority,
}

export default function FloatTicketInfo({ ticketId = "", department = { title: "", _id: "" }, tags = [], priority = "low" }: Readonly<Props>) {
  const renderTags = tags.map((tag: ITag) => (
    <Badge text={tag?.name} title={tag?._id} variant='primary' key={tag._id} customColor={tag?.color} />
  ))
  return (
    <div className={Style['float-ticket__info']}>
      <span className={Style['float-ticket__info__id']}>
        <p>Ticket Id</p>
        <strong>#{ticketId}</strong>
      </span>
      {department && <span className={Style['float-ticket__info__department']}>
        <p>Department</p>
        <Badge text={department.title} title={department._id} variant='primary' key={department._id} />
      </span>}
      {tags && tags?.length > 0 && <span className={Style['float-ticket__info__tags']}>
        <p>Tags</p>
        <strong>{renderTags}</strong>
      </span>}
      <span className={Style['float-ticket__info__priority']}>
        <p>Priority</p>
        <Badge text={priority} title={priority} variant={TICKET_PRIORITY_COLORS[priority ?? 'low']} key={priority} />
      </span>
    </div>
  )
}