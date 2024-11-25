import S from '../Ticket.module.css'
import Input from '../../../../../components/input/Input'
import Avatar from '../../../../../components/avatar/Avatar'
import AvatarDropdown from '../../../../../components/avatar-dropdown/AvatarDropdown'
import List from '../../../../../components/list/List'
import ListItem from '../../../../../components/list/ListItem'
import HelpText from '../../../../../components/help-text/HelpText'
import Dropdown from '../../../../../components/dropdown/Dropdown'
import { useId, useState } from 'react'
import Button from '../../../../../components/button/Button'
import { CircleX, Pencil, Trash, UserPen } from 'lucide-react'

interface IComment {
  id: number,
  name: string,
  date: string,
  message: string,
  isSolution: boolean,
  handleMarkTicket: (commentId: number) => void,
}

type TabsType = 'the_topic' | 'conversation' | 'attachments' | 'history'

let id = 0
const commentsData = [
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: true },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Omar Khaled', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
  { id: id++, name: 'Ali Mohamed', date: 'Mar 26, 2024 03:34 PM (3 weeks ago)', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.', isSolution: false },
]
console.log(commentsData)


function Comment({ id, name = 'Ali Khaled', date = "Mar 26, 2024 03:34 PM (3 weeks ago)", message = "message sample.", isSolution = false, handleMarkTicket }: IComment) {

  return (
    <div className={`${S["ticket-page__comment"]}  ${isSolution && S['ticket-page__comment-marked-as-a-solution']}`}>
      <div className={`${S['ticket-page__commenter']}`}>
        <AvatarDropdown name={name}>
          <List position='absolute' rightOrLeft='left'>
            <ListItem>Profile</ListItem>
            <ListItem>Tickets</ListItem>
          </List>
        </AvatarDropdown>
        <div className={S['ticket-page__commenter-info']}>
          <p className={`${S['ticket-page__commenter__name']}`}>{name}</p>
          <p className={`${S['ticket-page__commenter__date']}`}>{date}</p>
        </div>
        <Dropdown>
          <List position='absolute' rightOrLeft='right'>
            <ListItem onClick={() => handleMarkTicket(id)} noStyle>
              <Button width='fill' size='sm' outline variant={isSolution ? 'danger' : 'success'}>{isSolution ? 'Not a' : 'The'} solution</Button>
            </ListItem>
          </List>
        </Dropdown>
      </div>
      <p className={`${S['ticket-page__commenter__message']}`}>
        {message}
      </p>
      {isSolution && <HelpText variant='success'>This response marked as a solution</HelpText>}
    </div>
  )
}

function ConversationTab() {
  // const [markTicketAsASolution, setMarkTicketAsASolution] = useState(false)
  const [comments, setComments] = useState(commentsData)

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
    <div className={S['ticket-page__conversation-tab']}>
      <form className={`${S['ticket-page__add-comment']}`}>
        <Avatar />
        <Input type='text' placeholder='Comment...' />
        <Button variant='info' size='md'>Comment</Button>
      </form>
      <div className={`${S["ticket-page__comments"]}`}>
        {renderCommentsList}
      </div>
    </div>
  )
}

function TheTopicTab() {
  return (
    <>
      {/* Main Container */}
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>

        {/* Header Section */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>
          <h1 style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', margin: '0' }}>
            Product Quality Issue - Delayed Shipment #[Ticket Number]
          </h1>
        </div>

        {/* Metadata Section */}
        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#f9f9f9', borderLeft: '4px solid #2196F3' }}>
          <div style={{ margin: '5px 0', color: '#666' }}><strong>Date Submitted:</strong> [Current Date]</div>
          <div style={{ margin: '5px 0', color: '#666' }}><strong>Customer Name:</strong> [Customer Name]</div>
          <div style={{ margin: '5px 0', color: '#666' }}><strong>Customer ID:</strong> [Customer ID]</div>
          <div style={{ margin: '5px 0', color: '#666' }}>
            <strong>Priority:</strong> <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>High</span>
          </div>
          <div style={{ margin: '5px 0', color: '#666' }}><strong>Category:</strong> Shipping/Delivery</div>
        </div>

        {/* Main Content */}
        <div style={{ lineHeight: '1.6', color: '#444' }}>
          {/* Issue Description */}
          <div style={{ color: '#2196F3', fontSize: '16px', fontWeight: 'bold', margin: '15px 0 10px 0' }}>
            Issue Description:
          </div>
          <p>
            I am writing to express my dissatisfaction with the recent order (Order #[Order Number])
            placed on [Order Date]. The package was promised to be delivered within 3-5 business days,
            but it has been over two weeks, and I still haven't received my order.
          </p>

          {/* Impact */}
          <div style={{ color: '#2196F3', fontSize: '16px', fontWeight: 'bold', margin: '15px 0 10px 0' }}>
            Impact:
          </div>
          <p>
            This delay has caused significant inconvenience as these items were needed for [specific reason/event].
            I have made several attempts to track the package, but the tracking information hasn't been
            updated since [date].
          </p>

          {/* Expected Resolution */}
          <div style={{ color: '#2196F3', fontSize: '16px', fontWeight: 'bold', margin: '15px 0 10px 0' }}>
            Expected Resolution:
          </div>
          <p>
            1. Immediate update on the current status of my order<br />
            2. Expedited shipping for the remaining delivery<br />
            3. Compensation for the delay and inconvenience caused
          </p>

          {/* Previous Contact */}
          <div style={{ color: '#2196F3', fontSize: '16px', fontWeight: 'bold', margin: '15px 0 10px 0' }}>
            Previous Contact:
          </div>
          <p>
            I have already contacted customer service via phone on [date] (Reference #[reference number])
            but haven't received a satisfactory response.
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee', fontSize: '14px', color: '#666' }}>
          <p>
            <strong>Contact Information:</strong><br />
            Email: [customer@email.com]<br />
            Phone: [Phone Number]<br />
            Best time to contact: [Preferred Time]
          </p>
        </div>
      </div>
    </>
  );
};

function AttachmentsTab() {
  return (
    <div className={S['ticket-page__attachments-tab']}>
      sdf
    </div>
  )
}

function HistoryTab() {
  const id = useId()
  console.log('history id', id)
  const hisotries = [
    { id: id, title: 'Safwan Mohamed', description: 'changed the ticket name', type: 'made changes', action: 'edit', createdAt: '20/Apr/22', time: '04:47 PM' },
    { id: id, title: 'Safwan Mohamed', description: 'changed the ticket name', type: 'made changes', action: 'edit', createdAt: '20/Apr/22', time: '04:47 PM' },
    { id: id, title: 'Safwan Mohamed', description: 'changed the ticket name', type: 'assigned', action: 'assign', createdAt: '20/Apr/22', time: '04:47 PM' },
    { id: id, title: 'Safwan Mohamed', description: 'deleted comment', type: 'made changes', action: 'delete', createdAt: '20/Apr/22', time: '04:47 PM' },
    { id: id, title: 'Safwan Mohamed', description: 'changed the ticket name', type: 'closed ticket', action: 'close', createdAt: '20/Apr/22', time: '04:47 PM' },
    { id: id, title: 'Safwan Mohamed', description: 'changed the ticket name', type: 'made changes', action: 'edit', createdAt: '20/Apr/22', time: '04:47 PM' },
  ]

  const renderHistories = hisotries?.map((history) => (
    <div className={S['ticket-page__history-item']} key={history.id}>
      <div className={S['ticket-page__history__date']}>
        <div className={S["ticket-page__history__day"]}>{history.createdAt}</div>
        <div className={S["ticket-page__history__time"]}>{history.time}</div>
      </div>
      <div className={S['ticket-page__history__icon']}>
        {history.action === 'edit' && <Pencil size={30} strokeWidth={1.1} />}
        {history.action === 'delete' && <Trash size={30} strokeWidth={1.1} />}
        {history.action === 'assign' && <UserPen size={30} strokeWidth={1.1} />}
        {history.action === 'close' && <CircleX size={30} strokeWidth={1.1} />}
      </div>
      <div className={S['ticket-page__history__info']}>
        <h4 className={S['ticket-page__history__title']}>{history.title} <HelpText icon='invisible'>{history.type}</HelpText></h4>
        <p className={S['ticket-page__history__description']}>{history.description}</p>
      </div>
    </div>
  ))

  return (
    <div className={S['ticket-page__history-tab']}>
      <div className={S['ticket-page__history-list']}>
        {renderHistories}
      </div>
    </div>
  )
}

export default function TicketBody() {
  const [tab, setTab] = useState<TabsType>('the_topic')

  const handleTabsChanging = (tabName: TabsType) => {
    setTab(tabName)
  }

  const tabsNames: TabsType[] = ['the_topic', 'conversation', 'attachments', 'history']
  const renderTabs = tabsNames?.map((tabName) => (
    <span
      className={`${S['ticket-page__tab']} ${tab === tabName && S['ticket-page__tab--active']}`}
      id="the_topic"
      onClick={() => handleTabsChanging(tabName)} key={tabName}>
      {tabName.replace('_', ' ')}
    </span>
  ))


  const renderTab = () => {
    const tabs = {
      ['the_topic']: <TheTopicTab />,
      conversation: <ConversationTab />,
      attachments: <AttachmentsTab />,
      history: <HistoryTab />
    }
    return tabs[tab]
  }

  return (
    <article className={S['ticket-page__body']}>
      <div className={S["ticket-page__overlay"]}></div>
      <div className={S['ticket-page__tabs__wrapper']}>
        <div className={S['ticket-page__tabs']}>
          {renderTabs}
        </div>
      </div>
      <div className={S['ticket-page__tab-container']}>
        {renderTab()}
      </div>
    </article >
  )
}