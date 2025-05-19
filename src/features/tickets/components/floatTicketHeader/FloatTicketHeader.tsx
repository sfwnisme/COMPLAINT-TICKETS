import Spacer from '../../../../components/spacer/Spacer'
import Style from './FloatTicketHeader.module.css'
import Button from '../../../../components/button/Button'
import { X } from 'lucide-react'
import { useFloatTicket } from '../../../../store/ticket.store'

type Props = {
  title: string
}

export default function FloatTicketHeader({ title = 'dummy title' }: Readonly<Props>) {
  const toggleFloatTicket = useFloatTicket((state) => state.toggleFloatTicket)
  return (
    <div className={Style["float-ticket__header"]}>
      <h2 className={Style['float-ticket__title']}>{title}</h2>
      <Spacer />
      <Button onClick={toggleFloatTicket} size='square' shape='soft'>
        <X className={Style['float-ticket__close-icon']} />
      </Button>
    </div>
  )
}