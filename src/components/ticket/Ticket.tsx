import { Clock, User } from 'lucide-react'
import S from './Ticket.module.css'
import Select from '../select/Select'
import Badge from '../badge/Badge'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'
import HelpText from '../help-text/HelpText'
import { TTicketTypes, TVariants } from '../defintions.components'

type Props = {
  title: string,
  ticketType?: TTicketTypes,
  ticketId: number,
  creatorId: number,
  departmentId: number,
  statusId: number,
  priorityId: number,
  tagsIds: number[]
  createdAt: string,
}


//-- users demo data
const demoUsersList: { id: number, name: string }[] = [
  { id: 1, name: 'sfwn', },
  { id: 2, name: 'tariq', },
  { id: 3, name: 'ali', },
  { id: 4, name: 'omar', },
  { id: 5, name: 'waseem', },
]

//-- tags demo data
const demoTagsList: { id: number, name: string, description: string }[] = [
  { id: 2, name: 'payment', description: 'payments issues, client can not complete payment' },
  { id: 12, name: 'coupon', description: 'coupon issues, client can not redeem the coupon' },
  { id: 5, name: 'login', description: 'login issues, client can not login' },
  { id: 93, name: 'response', description: 'response issues, client can not get responed' },
]

//-- status demo data
const demoStatusesList = [
  { id: 1, name: 'issued' },
  { id: 2, name: 'solving' },
  { id: 3, name: 'solved' },
  { id: 4, name: 'blocked' }
]

//-- departments demo data
const demoDepartmentsList = [
  { id: 1, name: 'marketing', manager: 'omar' },
  { id: 2, name: 'sales', manager: 'ali' },
  { id: 3, name: 'operation', manager: 'tariq' },
  { id: 3, name: 'courier', manager: 'tariq' },
]

//-- priorities demo data
const demoPrioritiesList = [
  { id: 1, name: 'low' },
  { id: 2, name: 'medium' },
  { id: 3, name: 'high' },
]

//-- ticket color by category
const ticketTicketTypeColor: Record<TTicketTypes, TVariants> = {
  complaint: 'danger',
  inquiry: 'info',
  suggestion: 'warning',
}

//-- status color by id
const statusesColors: { [index: string]: TVariants } = {
  1: 'primary',
  2: 'info',
  3: 'success',
  4: 'danger',
}

//-- priority color by name
const priorityColor: { [key: string]: TVariants } = {
  1: 'primary',
  2: 'info',
  3: 'danger',
}


export default function Ticket(
  {
    title = 'title',
    ticketType = 'complaint',
    ticketId = 134,
    creatorId = 1,
    departmentId = 1,
    statusId = 1,
    priorityId = 1,
    tagsIds = [2, 12],
    createdAt = 'Created 2 days ago',
  }: Props
) {


  //-- find creator by id
  const creator = demoUsersList.find((user) => user.id === creatorId)?.name
  console.log('user carator', creator)

  //-- tags mapping
  const renderTagsOptions = demoTagsList.filter((tag) => tagsIds.includes(tag.id))?.slice(0, 3).map((tag) => (
    <Badge text={tag.name} title={tag.description} variant='primary' key={tag.id} />
  ))

  //-- status mapping
  const renderStatusOptions = demoStatusesList.map((s) => <option value={s.id} key={s.id} id={String(s.id)}>{s.name}</option>)

  //-- departments mapping
  const renderDepartmentsOptions = demoDepartmentsList.map((dep) => <option value={dep.id} key={dep.id} id={String(dep.id)}>{dep.name}</option>)

  //-- priorities mapping 
  const renderPrioritiesOptions = demoPrioritiesList.map((perio) => <option value={perio.id} key={perio.id} id={String(perio.id)}>{perio.name}</option>)

  return (
    <div className={`${S.ticket}`}>
      <div className={S['ticket__header']}>
        <div className={S['ticket__settings']}>
          <div className={S['ticket__check']}>
            <input type='checkbox' title={ticketId.toString()} />
          </div>
        </div>
        <h3 className={S['ticket__title']}>{title}</h3> <NavLink to={'tickets/2'}><Button size='xs' outline>open</Button></NavLink>
        <div className={S["ticket__header__footer"]}>
          <Badge text={ticketType} variant={ticketTicketTypeColor[ticketType]} />
          <p className={S["ticket__number"]}>#{ticketId}</p>
          <div className={S["ticket__assignee"]}><User size={14} strokeWidth={1.6} />@{creator}</div>
          <div className={S["ticket__created-at"]} ><Clock size={14} strokeWidth={1.6} /> {createdAt}</div>
        </div >
      </div >
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__department"]}>
          <Select sze='sm' defaultValue={departmentId} title='select department'>
            {renderDepartmentsOptions}
          </Select>
        </div>

        <div className={S["ticket__priority"]}>
          <Select sze='sm' defaultValue={priorityId} variant={priorityColor[priorityId]} title='select priority'>
            {renderPrioritiesOptions}
          </Select>
        </div>
        <div className={S["ticket__status"]}>
          <Select sze='sm' defaultValue={statusId} variant={statusesColors[statusId]} title='select status'>
            {renderStatusOptions}
          </Select>
        </div>
        <div className={S["ticket__tags"]}>
          {renderTagsOptions}
          {tagsIds.length > 3 && <HelpText icon='invisible'>and more...</HelpText>}
        </div>
      </div>
    </div >
  )
}
