import S from '../Ticket.module.css'
import Avatar from '../../../../../components/avatar/Avatar'
import Link from '../../../../../components/Link/Link'
import { Clock, Mail, Timer, TimerReset, Users } from 'lucide-react'
import Select from '../../../../../components/select/Select'
import HelpText from '../../../../../components/help-text/HelpText'

type Props = {
  toggle: boolean;
  setToggle: { (value: boolean | ((prev: boolean) => boolean)): void }
}

export default function TicketSidebar(props: Props) {

  return (
    <aside className={S['ticket-page__sidebar']}>
      <div className={S['ticket-page__sidebar__csr']}>
        <div className={S['ticket-page__sidebar__csr__avatar']}>
          <Avatar name='customer service' />
          <p className={S['ticket-page__sidebar__csr__name']}>customer service</p>
        </div>
        <div className={S['ticket-page__sidebar__csr__info']}>
          <div className={S['ticket-page__sidebar__csr__info__data']}>
            <Mail size={15} />
            <Link size='xs' href='mailto:sfwn21@gmail.com' icon='none'>sfwn21@gmail.com</Link>
          </div>
          <div className={S['ticket-page__sidebar__csr__info__data']}>
            <Users size={15} />
            <Link href='' size='xs' icon='none'>salse</Link>
          </div>
          <div className={S['ticket-page__sidebar__csr__info__data']}>
            <Clock size={15} />
            <p className={S['ticket-page__sidebar__csr__info__data__text']}>Apr 16, 2024 02:43 PM</p>
          </div>
          <div className={S['ticket-page__sidebar__csr__info__data']}>
            <Link size='xs' href='profile'>view profile</Link>
            <span></span>
            <Link size='xs' href='ticket'>recent ticket</Link>
          </div>
        </div>
      </div>
      <div className={S["ticket-page__sidebar__ticket-info"]}>
        <div className={S['ticket-page__sidebar__ticket__select']}>
          <p className={S['ticket-page__sidebar__ticket__select__title']}>Status</p>
          <Select sze='sm'>
            <option>issued</option>
            <option>solving</option>
            <option>solved</option>
            <option>blocked</option>
            <option>closed</option>
          </Select>
          <HelpText icon='invisible'>Status changed 2 days ago</HelpText>
        </div>
        <div className={S['ticket-page__sidebar__ticket__select']}>
          <p className={S['ticket-page__sidebar__ticket__select__title']}>periority</p>
          <div>
            <Select sze='sm'>
              <option value="" selected>select periority</option>
              <option>urgent</option>
              <option>medium</option>
              <option>normal</option>
            </Select>
          </div>
        </div>
        <div className={S['ticket-page__sidebar__ticket__select']}>
          <p className={S['ticket-page__sidebar__ticket__select__title']}>Assignee</p>
          <div>
            <Select sze='sm'>
              <option>Khaled</option>
              <option>medium</option>
              <option>normal</option>
            </Select>
          </div>
        </div>
      </div>
    </aside>
  )
}