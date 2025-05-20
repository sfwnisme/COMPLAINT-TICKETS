
import Style from './Comment.module.css'
import { Case, Shift } from "@sfwnisme/visi"
import { Avatar } from "../../../../components"
import useDeleteApiData from "../../../../hooks/use-delete-api-data"
import useUpdateApiData from "../../../../hooks/use-update-api-data"
import { formatedDate } from "../../../../libs/formated-date"
import Loader from "../../../../components/loaders/loader/Loader"
import Dropdown from "../../../../components/dropdown/Dropdown"
import List from "../../../../components/list/List"
import ListItem from "../../../../components/list/ListItem"
import HelpText from "../../../../components/help-text/HelpText"
import { IComment } from '../../../../types/types'

type Props = {
  comment: IComment
}
export default function Comment({
  comment
}: Readonly<Props>) {
  const { mutateAsync: deleteComment, isPending: isPendingDelete } = useDeleteApiData({ endpoint: `/comments`, revalidateKey: '/comments' })
  const { mutateAsync: updateComment, isPending: isPendingMark } = useUpdateApiData({ endpoint: '/comments', revalidateKey: '/comments', id: comment._id, method: 'patch' })
  const handleDeleteComment = async () => {
    await deleteComment(comment._id)
  }

  const markCommentSolution = async () => {
    await updateComment({ isSolution: !comment.isSolution })
  }

  return (
    <div className={`${Style["ticket-page__comment"]} ${comment.isSolution && Style['ticket-page__comment-marked-as-a-solution']}`} id={comment._id}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <Avatar name={comment.author.name} key={comment.author._id} size="sm" />
        <div className={Style['ticket-page__commenter-info']} id={comment.author._id}>
          <p className={`${Style['ticket-page__commenter__name']}`}>{comment.author.name}</p>
          <p className={`${Style['ticket-page__commenter__date']}`}>{formatedDate(comment.createdAt)}</p>
        </div>
        <Shift >
          <Case when={isPendingMark || isPendingDelete}>
            <Loader />
          </Case>
          <Case when={!isPendingMark || !isPendingDelete}>
            <Dropdown>
              <List position='absolute' rightOrLeft='right'>
                <ListItem onClick={markCommentSolution}>
                  {!comment.isSolution ? 'Mark solution' : 'Unmark solution'}
                </ListItem>
                <ListItem onClick={handleDeleteComment}>
                  Remove
                </ListItem>
              </List>
            </Dropdown>
          </Case>
        </Shift>
      </div>
      <p className={`${Style['ticket-page__commenter__message']}`}>
        {comment.content}
      </p>
      {comment.isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}