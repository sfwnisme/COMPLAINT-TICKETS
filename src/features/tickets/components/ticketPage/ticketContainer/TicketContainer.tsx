import { useState } from 'react'
import Style from './TicketContainer.module.css'
import TicketContent from '../ticketContent/TicketContent'
import { ITicket } from '../../../../../types/types'
import TicketSidebar from '../ticketSidebar/TicketSidebar'
import Button from '../../../../../components/button/Button'
import { ChevronRight } from 'lucide-react'

type Props = {
  ticket: ITicket,
}
export default function TicketContainer({ ticket }: Readonly<Props>) {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)
  return (
    <div>
      <div className={Style['ticket-page']}>
        <div className={`${Style['ticket-page__box']} ${Style['ticket-page__ticket-content']}`}>
          <TicketContent ticket={ticket} setToggleSidebar={setToggleSidebar} />
        </div>
        <div className={`${Style['ticket-page__box']} ${Style['ticket-page__ticket-sidebar']} ${!toggleSidebar && Style['ticket-page__ticket-sidebar--invisible']}`}>
          <div className={Style['ticket-page__ticket-sidebar__close-button']}>
            <Button variant='primary' size='square' shape='default' onClick={() => setToggleSidebar((prev) => !prev)}>
              <ChevronRight size={20} />
            </Button>
          </div>
          <TicketSidebar ticket={ticket} />
        </div>
      </div>
    </div>
  )
}
