import Style from './FloatTicet.module.css'
import { X } from 'lucide-react'
import Button from '../../components/button/Button'
import { Avatar, AvatarDropdown } from '../../components'
import List from '../../components/list/List'
import ListItem from '../../components/list/ListItem'
import Dropdown from '../../components/dropdown/Dropdown'
import HelpText from '../../components/help-text/HelpText'
import { useEffect, useState } from 'react'
import Input from '../../components/input/Input'

type Props = {
  isVisible: boolean;
  setIsVisible: (prev: boolean) => void;
}

let id = 0
const commentsData = [
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: '🟥🟥🟥🟥🟥🟥🟥🟥Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
]
console.log(commentsData)


function Comment({ id, name = 'Ali Khaled', date = "Mar 26, 2024 03:34 PM (3 weeks ago)", message = "message sample.", isSolution = false, handleMarkTicket }: IComment) {

  return (
    <div className={`${Style["ticket-page__comment"]}  ${isSolution && Style['ticket-page__comment-marked-as-a-solution']}`}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <AvatarDropdown name={name}>
          <List position='absolute' rightOrLeft='left'>
            <ListItem>Profile</ListItem>
            <ListItem>Tickets</ListItem>
          </List>
        </AvatarDropdown>
        <div className={Style['ticket-page__commenter-info']}>
          <p className={`${Style['ticket-page__commenter__name']}`}>{name}</p>
          <p className={`${Style['ticket-page__commenter__date']}`}>{date}</p>
        </div>
        <Dropdown>
          <List position='absolute' rightOrLeft='right'>
            <ListItem onClick={() => handleMarkTicket(id)} noStyle>
              <Button width='fill' size='sm' outline variant={isSolution ? 'danger' : 'success'}>{isSolution ? 'Not a' : 'The'} solution</Button>
            </ListItem>
          </List>
        </Dropdown>
      </div>
      <p className={`${Style['ticket-page__commenter__message']}`}>
        {message}
      </p>
      {isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}

function ConversationTab() {
  // const [markTicketAsASolution, setMarkTicketAsASolution] = useState(false)
  const [comments, setComments] = useState(commentsData)
  console.log('rendered ||||| conversation tab')

  const handleMarkTicket = (commentId: number) => {
    setComments((prev) => prev.map((p) =>
      commentId === p.id
        ? { ...p, isSolution: !p.isSolution }
        : { ...p })
    )
  }

  const renderCommentsList = comments?.map((comment) => (
    <Comment
      key={comment.id}
      id={comment.id}
      name={comment.name}
      date={comment.date}
      message={comment.message}
      isSolution={comment.isSolution}
      handleMarkTicket={handleMarkTicket}
    />
  ))

  return (
    <div className={Style['ticket-page__conversation-tab']}>
      {/* <form className={`${Style['ticket-page__add-comment']}`}>
        <Avatar />
        <Input type='text' placeholder='Comment...' />
        <Button variant='info' size='lg'>Answer</Button>
      </form> */}
      <div className={`${Style["ticket-page__comments"]}`}>
        {renderCommentsList}
      </div>
    </div>
  )
}

export default function FloatTicket({ isVisible, setIsVisible }: Props) {

  const handleInvisible = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (isVisible) {
      const body = document.body
      body.style.overflow = 'hidden'
    }
  }, [isVisible])

  return (
    <>
      {isVisible && <div className={Style["float-ticket__overlay"]}>
        <div className={Style['float-ticket']}>
          <div className={Style["float-ticket__header"]}>
            <h2 className={Style['float-ticket__title']}>Ticket Title</h2>
            <Button onClick={handleInvisible} size='square' outline>
              <X className={Style['float-ticket__close-icon']} />
            </Button>
          </div>
          <div className={Style["float-ticket__body"]}>
            <div className={Style['float-ticket__settings']}>
              <span className={Style['float-ticket__id']}>
                <p>Ticket Id</p>
                <strong>#kjoijwe23498u</strong>
              </span>
              <span className={Style['float-ticket__tag']}>
                <p>Ticket Tag</p>
                <strong>Technical</strong>
              </span>
              <span className={Style['float-ticket__tag']}>
                <p>Ticket Tag</p>
                <strong>Technical</strong>
              </span>
              <span className={Style['float-ticket__priority']}>
                <p>Ticket Priority</p>
                <strong>Medium</strong>
              </span>
            </div>
          </div>
          <div className={Style['float-ticket__chat']}>
            <div className={`${Style["ticket-page__comments"]}`}>
              <ConversationTab />
            </div>
          </div>
          <form className={`${Style['ticket-page__add-comment']}`}>
            <Avatar />
            <Input type='text' placeholder='Comment...' />
            <Button variant='info' size='lg'>Answer</Button>
          </form>
        </div>
      </div>}
    </>
  )
}