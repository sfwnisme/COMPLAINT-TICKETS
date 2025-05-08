import { Avatar } from "../../../components";
import Button from "../../../components/button/Button";
import Dropdown from "../../../components/dropdown/Dropdown";
import HelpText from "../../../components/help-text/HelpText";
import List from "../../../components/list/List";
import ListItem from "../../../components/list/ListItem";
import useDeleteApiData from "../../../hooks/use-delete-api-data";
import { IComment } from "../../../types/ticket.types";
import Style from './Comment.module.css'

export default function Comment({ _id = '', author = { _id: "", name: "" }, createdAt = "", content = "", isSolution = false }: Omit<IComment, 'ticket' | 'updatedAt'>) {
  const { mutateAsync } = useDeleteApiData({ endpoint: `/comments`, revalidateKey: '/comments' })
  const deleteComment = async () => {
    await mutateAsync(_id)
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
        <Dropdown>
          <List position='absolute' rightOrLeft='right'>
            <Button width="fill" size="sm" variant="danger" onClick={deleteComment}
            >delete</Button>
            <ListItem noStyle>
              <Button width='fill' size='sm' outline variant={isSolution ? 'danger' : 'success'}>{isSolution ? 'Not a' : 'The'} solution</Button>
            </ListItem>
          </List>
        </Dropdown>
      </div>
      <p className={`${Style['ticket-page__commenter__message']}`}>
        {content}
      </p>
      {isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}