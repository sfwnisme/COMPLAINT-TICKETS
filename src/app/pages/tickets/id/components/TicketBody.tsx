import S from '../Ticket.module.css'
import Input from '../../../../../components/input/Input'
import Avatar from '../../../../../components/avatar/Avatar'
import AvatarDropdown from '../../../../../components/avatar-dropdown/AvatarDropdown'
import List from '../../../../../components/list/List'
import ListItem from '../../../../../components/list/ListItem'
import HelpText from '../../../../../components/help-text/HelpText'
import Dropdown from '../../../../../components/dropdown/Dropdown'
import { useState } from 'react'
import Button from '../../../../../components/button/Button'

interface IComment {
  id: number,
  name: string,
  date: string,
  message: string,
  isSolution: boolean,
  handleMarkTicket: (commentId: number) => void,
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
    <div className={S['ticket-page__conversation-tap']}>
      <div className={`${S['ticket-page__add-comment']}`}>
        <Avatar />
        <Input type='text' placeholder='Comment...' />
      </div>
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
    <div className={S['ticket-page__attachments-tap']}>
      sdf
    </div>
  )
}

function HistoryTab() {
  return (
    <div className={S['ticket-page__history-tap']}>

    </div>
  )
}

export default function TicketBody() {
  const [tab, setTab] = useState<'the_topic' | 'conversation' | 'attachments' | 'history'>('the_topic')
  const handleTabsChanging = (event) => {
    const { id } = event.target
    console.log('the tab id ', id)
    setTab(id)
  }

  let openedTab = <TheTopicTab />

  if (tab === 'the_topic') {
    openedTab = <TheTopicTab />
  }
  if (tab === 'conversation') {
    openedTab = <ConversationTab />
  }
  if (tab === 'attachments') {
    openedTab = <AttachmentsTab />
  }
  if (tab === 'history') {
    openedTab = <HistoryTab />
  }

  return (
    <article className={S['ticket-page__body']}>
      <div className={S["ticket-page__overlay"]}></div>
      <div className={S['ticket-page__tabs__wrapper']}>
        <div className={S['ticket-page__tabs']}>
          <span className={`${S['ticket-page__tab']} ${tab === 'the_topic' && S['ticket-page__tab--active']}`} id="the_topic" onClick={handleTabsChanging}>The topic</span>
          <span className={`${S['ticket-page__tab']} ${tab === 'conversation' && S['ticket-page__tab--active']}`} id="conversation" onClick={handleTabsChanging}>conversation</span>
          <span className={`${S['ticket-page__tab']} ${tab === 'attachments' && S['ticket-page__tab--active']}`} id="attachments" onClick={handleTabsChanging}>attachments</span>
          <span className={`${S['ticket-page__tab']} ${tab === 'history' && S['ticket-page__tab--active']}`} id="history" onClick={handleTabsChanging}>history</span>
        </div>
      </div>
      {openedTab}
    </article >
  )
}