import UserChip from '../../../../components/userChip/UserChip'
import { formateDate } from '../../../../libs/formate-date'

type Props = {
  name: string,
  createdAt: string,
}

export default function FloatTicketAuthor({ name, createdAt }: Readonly<Props>) {
  return <UserChip name={name} text={formateDate(createdAt)} avatarSize='md' fontSize='lg' />
}