import { Clock, User } from 'lucide-react'
import S from './Ticket.module.css'
import Select from '../select/Select'
import Badge from '../badge/Badge'
import Input from '../input/Input'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'

type Props = {
  type?: 'suggestion' | 'complaint' | 'inquiry'
  title: string,
}

export default function Ticket({ type = 'complaint', title = 'title' }: Props) {
  const types = {
    complaint: S['ticket--complaint'],
    inquiry: S['ticket--inquiry'],
    suggestion: S['ticket--suggestion'],
  }

  const settings = types[type]

  return (
    <div className={`${S.ticket} ${settings}`}>
      <div className={S['ticket__header']}>
        <div className={S['ticket__settings']}>
          <div className={S['ticket__check']}>
            <Input type='checkbox' />
          </div>
        </div>
        <h3 className={S['ticket__title']}>{title}</h3> <NavLink to={'/tickets/2'}><Button size='xs' outline>open</Button></NavLink>
        <div className={S["ticket__header__footer"]}>
          <p className={S["ticket__number"]}>#9458932349</p>
          <div className={S["ticket__assignee"]}><User size={14} strokeWidth={1.6} /> sfwn</div>
          <div className={S["ticket__created-at"]} > <Clock size={14} strokeWidth={1.6} /> Created 2 days ago</div>
          <Badge text={type} variant={type === 'complaint' ? 'danger' : type === 'inquiry' ? 'info' : 'warning'} />
        </div >
      </div >
      <div className={S["ticket__footer"]}>
        <div className={S["ticket__department"]}>
          <Select sze='sm'>
            <option>Sales</option>
            <option>IT</option>
            <option>Operation</option>
          </Select>
        </div>

        <div className={S["ticket__periority"]}>
          <Select sze='sm'>
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </Select>
        </div>
        <div className={S["ticket__status"]}>
          <Select sze='sm'>
            <option>issued</option>
            <option>solved</option>
            <option>solving</option>
            <option>blocked</option>
          </Select>
        </div>
        <div className={S["ticket__tags"]}>
          <Badge text='payment' variant='primary' />
          <Badge text='visa' variant='primary' />
          <Badge text='coupon' variant='primary' />
        </div>
      </div>
    </div >
  )
}
