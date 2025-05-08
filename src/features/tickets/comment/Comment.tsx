import { BookmarkCheck, BookmarkX, Trash, Trash2 } from "lucide-react";
import { Avatar } from "../../../components";
import Button from "../../../components/button/Button";
import Dropdown from "../../../components/dropdown/Dropdown";
import HelpText from "../../../components/help-text/HelpText";
import List from "../../../components/list/List";
import ListItem from "../../../components/list/ListItem";
import useDeleteApiData from "../../../hooks/use-delete-api-data";
import { IComment } from "../../../types/ticket.types";
import Style from './Comment.module.css'
import useUpdateApiData from "../../../hooks/use-update-api-data";
import Loader from "../../../components/loaders/loader/Loader";
import { Case, Shift, Visible } from "@sfwnisme/visi";

export default function Comment({ _id = '', author = { _id: "", name: "" }, createdAt = "", content = "", isSolution = false }: Omit<IComment, 'ticket' | 'updatedAt'>) {
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

  console.log('marking ================', isPendingMark || isPendingDelete)

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
                <ListItem noStyle>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <Button width="fill" size="xs" variant="danger" onClick={handleDeleteComment}><Trash size={23} strokeWidth={2.2} /></Button>
                    <Button
                      width='fill'
                      size='xs'
                      outline
                      variant={isSolution ? 'danger' : 'success'}
                      title={isSolution ? "Unmark as a solution" : "Mark as a solution"}
                      onClick={markCommentSolution}>{isSolution ? <BookmarkX size={25}
                      /> : <BookmarkCheck size={25} />}</Button>
                  </div>
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