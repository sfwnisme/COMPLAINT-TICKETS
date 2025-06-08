
import Style from './Comment.module.css'
import { Case, Shift, Visible } from "@sfwnisme/visi"
import useDeleteApiData from "../../../../hooks/use-delete-api-data"
import useUpdateApiData from "../../../../hooks/use-update-api-data"
import Dropdown from "../../../../components/dropdown/Dropdown"
import List from "../../../../components/list/List"
import ListItem from "../../../../components/list/ListItem"
import HelpText from "../../../../components/help-text/HelpText"
import { IComment } from '../../../../types/types'
import UserChip from '../../../../components/userChip/UserChip'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import Button from '../../../../components/button/Button'
import { formatedDate } from '../../../../libs/formated-date'
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'

type Props = {
  comment: IComment
}
export default function Comment({
  comment
}: Readonly<Props>) {
  const { mutateAsync: deleteComment, isPending: isPendingDelete } = useDeleteApiData({ endpoint: `/comments`, revalidateKey: ['/comments'] })
  const { mutateAsync: updateComment, isPending: isPendingMark } = useUpdateApiData({ endpoint: '/comments', revalidateKey: '/comments', id: comment?._id, method: 'patch' })
  const handleDeleteComment = async () => {
    await deleteComment(comment?._id)
  }
  const currentUser = useGetCurrentUser()
  const allowedToModify = currentUser?.data?._id === comment?.author?._id

  const markCommentSolution = async () => {
    await updateComment({ isSolution: !comment?.isSolution })
  }

  return (
    <div className={`${Style["ticket-page__comment"]} ${comment?.isSolution && Style['ticket-page__comment-marked-as-a-solution']}`} id={comment?._id}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <UserChip name={comment?.author?.name} text={formatedDate(comment?.createdAt)} />
        <Visible when={allowedToModify}>
          <Shift fallback={<LoadingIcon />}>
            <Case when={isPendingDelete || isPendingMark}>
              <Button size='square' shape='soft' disabled>
                <LoadingIcon />
              </Button>
            </Case>
            <Case when={!isPendingDelete || !isPendingMark}>
              <Dropdown>
                <List position='absolute' rightOrLeft='right'>
                  <ListItem onClick={markCommentSolution}>
                    {!comment?.isSolution ? 'Mark solution' : 'Unmark solution'}
                  </ListItem>
                  <ListItem onClick={handleDeleteComment}>
                    Remove
                  </ListItem>
                </List>
              </Dropdown>
            </Case>
          </Shift>
        </Visible>
      </div>
      <p className={`${Style['ticket-page__commenter__message']}`}>
        {comment?.content}
      </p>
      {comment?.isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}