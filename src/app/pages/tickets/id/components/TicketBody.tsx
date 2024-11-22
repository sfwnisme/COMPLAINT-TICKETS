import S from '../Ticket.module.css'
import Input from '../../../../../components/input/Input'
import Avatar from '../../../../../components/avatar/Avatar'
import AvatarDropdown from '../../../../../components/avatar-dropdown/AvatarDropdown'
import List from '../../../../../components/list/List'
import ListItem from '../../../../../components/list/ListItem'
import Badge from '../../../../../components/badge/Badge'
import HelpText from '../../../../../components/help-text/HelpText'

// type Props = {}

export default function TicketBody() {
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
        <div className={`${S["ticket-page__reply"]}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
        </div>
        <div className={`${S["ticket-page__reply"]}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
        </div>
        <div className={`${S["ticket-page__reply"]}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
        </div>
        <div className={`${S["ticket-page__reply"]} ${S['ticket-page__reply-marked-as-a-solution']}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
          <HelpText variant='success'>this response marked as a solution</HelpText>
        </div>
        <div className={`${S["ticket-page__reply"]}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
        </div>
        <div className={`${S["ticket-page__reply"]}`}>
          <div className={`${S['ticket-page__replyer']}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
                <ListItem>mark as a solution</ListItem>
              </List>
            </AvatarDropdown>
            <div>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
            </div>
          </div>
          <p className={`${S['ticket-page__replyer__message']}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur
            reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea
            explicabo ipsam ex officiis maxime repudiandae nisi.
          </p>
        </div>

      </div>
    </article>
  )
}