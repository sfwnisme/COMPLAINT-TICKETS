import UserChip from '../../../../components/userChip/UserChip'
import { formateDate } from '../../../../libs/formate-date'
import Button from '../../../../components/button/Button'
import Style from './FloatTicketAuthor.module.css'
import { NavLink } from 'react-router-dom'

type Props = {
  ticketId: string,
  name: string,
  createdAt: string,
}

export default function FloatTicketAuthor({ ticketId, name, createdAt }: Readonly<Props>) {

  return (
    <div className={Style['float-ticket-author']}>
      <div className={Style['float-ticket-author__author']}>
        <UserChip name={name} text={formateDate(createdAt)} avatarSize='md' fontSize='lg' />
      </div>
      <div className={Style['float-ticket-author__button']}>
        <NavLink to={'/dashboard/tickets/' + ticketId}>
          <Button variant='info' size='xs' width="fill" shape='soft' >Open page</Button>
        </NavLink>
      </div>
    </div>
  )
}