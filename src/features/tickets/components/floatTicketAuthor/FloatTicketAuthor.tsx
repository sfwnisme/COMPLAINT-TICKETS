import Style from './FloatTicketAuthor.module.css'
import { formatedDate } from '../../../../libs/formated-date'
import { Avatar } from '../../../../components'

type Props = {
  name: string,
  createdAt: string,
}

export default function FloatTicketAuthor({ name, createdAt }: Props) {
  return (
    <div className={Style['float-ticket__createdby']}>
      <Avatar size='md' name={name} />
      <div className={Style['float-ticket__createdby-info']}>
        <p className={`${Style['float-ticket__createdby__name']}`}>{name}</p>
        <p className={`${Style['float-ticket__createdby__date']}`}>{formatedDate(createdAt)}</p>
      </div>
    </div>
  )
}