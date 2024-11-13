import React from 'react'
import S from '../Ticket.module.css'
import Avatar from '../../../../../components/avatar/Avatar'
import Link from '../../../../../components/Link/Link'
import Button from '../../../../../components/button/Button'
import { X } from 'lucide-react'

type Props = {
  toggle: boolean;
  setToggle: { (value: boolean | ((prev: boolean) => boolean)): void }
}


export default function TicketSidebar(props: Props) {
  return (
    <aside className={S['ticket-page__sidebar']}>
      {/* <Button
        variant='danger'
        outline
        size='square'
        width='fit'
        className={S['ticket-page__sidebar__collapse-btn']}
        onClick={() => props.setToggle((prev: boolean) => !prev)}
      >
        <X size={20} strokeWidth={1.2} />
      </Button> */}
      <div className={S['ticket-page__sidebar__csr']}>
        <div className={S['ticket-page__sidebar__csr__info']}>
          <Avatar name='customer service' />
          <p className={S['ticket-page__sidebar__csr__name']}>customer service representitve</p>
        </div>
        <div className={S['ticket-page__sidebar__csr__team']}>
          <p className={S['ticket-page__sidebar__csr__team-name']}></p>
          <div>
            team: <Link href='' size='xs'>salse</Link>
          </div>
          <div>
            <Link size='xs' href='profile'>view profile</Link>
            <Link size='xs' href='ticket'>recent ticket</Link>
          </div>
        </div>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio reiciendis ratione odio porro sit? Et expedita aperiam ad aut delectus asperiores, quisquam, dolorem sit animi consequatur cum, praesentium blanditiis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. sfwnnsnfsklndfkl
    </aside>
  )
}