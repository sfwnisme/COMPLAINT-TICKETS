
import Style from './Comment.module.css'
import { Case, Shift } from "@sfwnisme/visi"
import { Avatar } from "../../../../components"
import useDeleteApiData from "../../../../hooks/use-delete-api-data"
import useUpdateApiData from "../../../../hooks/use-update-api-data"
import { IComment } from "../../../../types/ticket.types"
import { formatedDate } from "../../../../libs/formated-date"
import Loader from "../../../../components/loaders/loader/Loader"
import Dropdown from "../../../../components/dropdown/Dropdown"
import List from "../../../../components/list/List"
import ListItem from "../../../../components/list/ListItem"
import HelpText from "../../../../components/help-text/HelpText"

export default function Comment({
  _id = '',
  author = { _id: "", name: "" },
  createdAt = "",
  content = "",
  isSolution = false
}: Readonly<Omit<IComment, 'ticket' | 'updatedAt'>>) {
  const { mutateAsync: deleteComment, isPending: isPendingDelete } = useDeleteApiData({ endpoint: `/comments`, revalidateKey: '/comments' })
  const { mutateAsync: updateComment, isPending: isPendingMark } = useUpdateApiData({ endpoint: '/comments', revalidateKey: '/comments', id: _id, method: 'patch' })
  const handleDeleteComment = async () => {
    await deleteComment(_id)
  }

  const markCommentSolution = async () => {
    await updateComment({ isSolution: !isSolution })
  }

  return (
    <div className={`${Style["ticket-page__comment"]} ${isSolution && Style['ticket-page__comment-marked-as-a-solution']}`} id={_id}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <Avatar name={author.name} key={author._id} size="sm" />
        <div className={Style['ticket-page__commenter-info']} id={author._id}>
          <p className={`${Style['ticket-page__commenter__name']}`}>{author.name}</p>
          <p className={`${Style['ticket-page__commenter__date']}`}>{formatedDate(createdAt)}</p>
        </div>
        <Shift >
          <Case when={isPendingMark || isPendingDelete}>
            <Loader />
          </Case>
          <Case when={!isPendingMark || !isPendingDelete}>
            <Dropdown>
              <List position='absolute' rightOrLeft='right'>
                <ListItem onClick={markCommentSolution}>
                  {!isSolution ? 'Mark solution' : 'Unmark solution'}
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
        {content}
      </p>
      {isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}