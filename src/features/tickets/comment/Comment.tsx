import { Avatar } from "../../../components";
import Dropdown from "../../../components/dropdown/Dropdown";
import HelpText from "../../../components/help-text/HelpText";
import List from "../../../components/list/List";
import ListItem from "../../../components/list/ListItem";
import useDeleteApiData from "../../../hooks/use-delete-api-data";
import { IComment } from "../../../types/ticket.types";
import Style from './Comment.module.css'
import useUpdateApiData from "../../../hooks/use-update-api-data";
import Loader from "../../../components/loaders/loader/Loader";
import { Case, Shift } from "@sfwnisme/visi";

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

  const isoDate = new Date(createdAt)
  const formatedDate = isoDate.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })


  return (
    <div className={`${Style["ticket-page__comment"]} ${isSolution && Style['ticket-page__comment-marked-as-a-solution']}`} id={_id}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <Avatar name={author.name} key={author._id} />
        <div className={Style['ticket-page__commenter-info']} id={author._id}>
          <p className={`${Style['ticket-page__commenter__name']}`}>{author.name}</p>
          <p className={`${Style['ticket-page__commenter__date']}`}>{formatedDate}</p>
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