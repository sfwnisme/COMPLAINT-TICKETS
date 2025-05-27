import UserChip from '../../../../components/userChip/UserChip'
import { formatedDate } from '../../../../libs/formated-date'

type Props = {
  name: string,
  createdAt: string,
}

export default function FloatTicketAuthor({ name, createdAt }: Readonly<Props>) {
  return <UserChip name={name} text={formatedDate(createdAt)} avatarSize='md' fontSize='lg'/>
}