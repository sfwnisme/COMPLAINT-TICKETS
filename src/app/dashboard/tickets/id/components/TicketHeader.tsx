import S from '../Ticket.module.css'
import Badge from '../../../../../components/badge/Badge'
import { Timer, User } from 'lucide-react'
import Button from '../../../../../components/button/Button'

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: { (value: boolean | ((prev: boolean) => boolean)): void }
}

export default function TicketHeader(props: Props) {

  return (
    <header className={S['ticket-page__header']}>
      <div className={S['ticket-page__info']}>
        <h3 className={S['ticket-page__title']}>Ticket Title</h3>
        <div className={S['ticket-page__details']}>
          <span className={S['ticket-page__detail']}><User size={14} />sfwn</span>
          <span className={S['ticket-page__detail']}><Timer size={14} />2 weeks ago</span>
          <span className={S['ticket-page__detail']}>
            <Badge text='payment' variant='primary' />
            <Badge text='visa' variant='primary' />
            <Badge text='coupon' variant='primary' />
          </span>
        </div>
      </div>
      <Button
        variant={props.isSidebarOpen ? 'danger' : 'info'}
        // outline
        size='square'
        width='fit'
        className={`${S['ticket-page__collapse-btn']} ${props.isSidebarOpen && S['ticket-page__collapse-btn--fixed']}`}
        onClick={() => props.setIsSidebarOpen((prev: boolean) => !prev)}
      >
        {
          props.isSidebarOpen
            ? 'close'
            : 'more'
        }
        {/* more */}
      </Button>
    </header>
  )
}