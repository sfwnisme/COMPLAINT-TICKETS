import S from '../Ticket.module.css'
import Input from '../../../../../components/input/Input'
import Avatar from '../../../../../components/avatar/Avatar'
import AvatarDropdown from '../../../../../components/avatar-dropdown/AvatarDropdown'
import List from '../../../../../components/list/List'
import ListItem from '../../../../../components/list/ListItem'
import HelpText from '../../../../../components/help-text/HelpText'
import Dropdown from '../../../../../components/dropdown/Dropdown'

interface IComment {
  name: string,
  date: string,
  message: string,
  isSolution: boolean,
}

let id = 0
const comments = [
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
]


function Comment({ name = 'Ali Khaled', date = "Mar 26, 2024 03:34 PM (3 weeks ago)", message = "message sample.", isSolution = false }: IComment) {
  return (
    <div className={`${S["ticket-page__reply"]}  ${isSolution && S['ticket-page__reply-marked-as-a-solution']}`}>
      <div className={`${S['ticket-page__replyer']}`}>
        <AvatarDropdown name={name}>
          <List position='absolute' rightOrLeft='left'>
            <ListItem>Profile</ListItem>
            <ListItem>Tickets</ListItem>
          </List>
        </AvatarDropdown>
        <div className={S['ticket-page__replyer-info']}>
          <p className={`${S['ticket-page__replyer__name']}`}>{name}</p>
          <p className={`${S['ticket-page__replyer__date']}`}>{date}</p>
        </div>
        <Dropdown>
          <List position='absolute' rightOrLeft='right'>
            <ListItem>{isSolution ? 'Not a' : 'The'} solution</ListItem>
          </List>
        </Dropdown>
      </div>
      <p className={`${S['ticket-page__replyer__message']}`}>
        {message}
      </p>
      {isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}


export default function TicketBody() {

  const renderCommentsList = comments?.map((comment) => <Comment key={comment.id} name={comment.name} date={comment.date} message={comment.message} isSolution={comment.isSolution} />)

  return (
    <article className={S['ticket-page__body']}>
      <div className={S["ticket-page__overlay"]}></div>
      <div className={S['ticket-page__tabs']}>
        <span className={`${S['ticket-page__tab']}`}>The topic</span>
        <span className={`${S['ticket-page__tab']} ${S['ticket-page__tab--active']}`}>conversation</span>
        <span className={S['ticket-page__tab']}>attachments</span>
      </div>
      <div className={`${S['ticket-page__reply-input']}`}>
        <Avatar />
        <Input type='text' placeholder='Replay...' />
      </div>
      <div className={`${S["ticket-page__replies"]}`}>
        {renderCommentsList}
      </div>
    </article>
  )
}