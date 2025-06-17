import Style from './Comment.module.css'
import useDeleteApiData from "../../../../hooks/use-delete-api-data"
import useUpdateApiData from "../../../../hooks/use-update-api-data"
import Dropdown from "../../../../components/dropdown/Dropdown"
import List from "../../../../components/list/List"
import ListItem from "../../../../components/list/ListItem"
import HelpText from "../../../../components/helpText/HelpText"
import { IComment } from '../../../../types/types'
import UserChip from '../../../../components/userChip/UserChip'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import Button from '../../../../components/button/Button'
import { formateDate } from '../../../../libs/formate-date'
import DOMPurify from "dompurify";
// import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'
import useGetSingleTicket from '../../hooks/use-get-single-ticket'
import Can from '../../../../components/can/Can'
import TicketIfOpen from '../../../../components/ticketIfOpen/TicketIfOpen'

type Props = {
  comment: IComment
}
export default function Comment({
  comment
}: Readonly<Props>) {
  const { mutateAsync: deleteComment, isPending: isPendingDelete } = useDeleteApiData({ endpoint: `/comments`, revalidateKey: ['/comments'] })
  const { mutateAsync: updateComment, isPending: isPendingMark } = useUpdateApiData({ endpoint: '/comments', revalidateKey: '/comments', id: comment?._id, method: 'patch' })
  const ticket = useGetSingleTicket(comment?.ticket?._id)
  const handleDeleteComment = async () => {
    await deleteComment(comment?._id)
  }
  console.log('the ticket', ticket.data)
  // const currentUser = useGetCurrentUser()
  // const allowedToModify = currentUser?.data?._id === comment?.author?._id && (ticket?.data?.status !== 'resolved' && ticket?.data?.status !== 'closed')

  const markCommentSolution = async () => {
    await updateComment({ isSolution: !comment?.isSolution })
  }

  return (
    <div className={`${Style["comment"]} ${comment?.isSolution && Style['comment-marked-as-a-solution']}`} id={comment?._id}>
      <div className={`${Style['comment__author']}`}>
        <UserChip name={comment?.author?.name} text={formateDate(comment?.createdAt)} />
        <TicketIfOpen ticketId={comment?.ticket?._id}>
          <Can permission='canEdit' route='comment'>

            {
              isPendingDelete || isPendingMark ?
                <Button size='square' shape='soft' disabled>
                  <LoadingIcon />
                </Button>
                :
                <Dropdown>
                  <List position='absolute' rightOrLeft='right'>
                    <ListItem onClick={markCommentSolution}>
                      {!comment?.isSolution ? 'Mark solution' : 'Unmark solution'}
                    </ListItem>
                    <Can permission='canDelete' route='comment'>
                      <ListItem onClick={handleDeleteComment}>
                        Remove
                      </ListItem>
                    </Can>
                  </List>
                </Dropdown>
            }
          </Can>
        </TicketIfOpen>
      </div>
      <p className={`${Style['comment__author__message']}`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment?.content) }} />
      {comment?.isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}