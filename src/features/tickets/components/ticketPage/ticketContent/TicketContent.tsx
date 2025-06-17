import Style from './TicketContent.module.css'
import Comments from '../../comments/Comments'
import CreateCommentFormV2 from '../../../forms/createCommentFormV2/CreateCommentFormV2'
import DOMPurify from "dompurify";
import UserChip from '../../../../../components/userChip/UserChip'
import useGetCurrentUser from '../../../../../hooks/useGetCurrentUser'
import { ITicket } from '../../../../../types/types'
import Unnormalize from './unnormalize.module.css'
import { PanelLeftClose } from 'lucide-react';
import Button from '../../../../../components/button/Button';
import Can from '../../../../../components/can/Can';
import TicketIfOpen from '../../../../../components/ticketIfOpen/TicketIfOpen';
type Props = {
  ticket: ITicket,
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function TicketContent({ ticket, setToggleSidebar }: Props) {
  const currentUser = useGetCurrentUser()
  return (
    <div className={Style['ticket-content']}>
      <div className={Style['ticket-content__header']}>
        <div className={Style['ticket-content__title']}>
          {ticket?.title}
        </div>
        <Button variant='primary' size='square' shape='none' onClick={() => setToggleSidebar((prev) => !prev)}>
          <PanelLeftClose size={24} />
        </Button>
      </div>
      <div className={Style['ticket-content__conversation']}>
        <div className={Style['ticket-content__description']}>
          <article className={` ${Unnormalize.blog}`}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ticket?.description ?? '') }}
          />
        </div>
        <div className={Style['ticket-content__comments']}>
          <Comments ticketId={ticket?._id} />
        </div>
      </div>
      <TicketIfOpen ticketId={ticket?._id}>
        <Can permission='canEdit' route='comment'>
          <div className={Style['ticket-content__create-comment']}>
            <UserChip avatarSize='sm' name={currentUser?.data?.name ?? ""} text={currentUser?.data?.email ?? ""} />
            <CreateCommentFormV2 ticketId={ticket?._id} />
          </div>
        </Can>
      </TicketIfOpen>
    </div>
  )
}