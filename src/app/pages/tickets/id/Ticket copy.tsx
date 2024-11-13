import { Timer, User } from 'lucide-react'
import Badge from '../../../../components/badge/Badge'
import S from './Ticket.module.css'
import Input from '../../../../components/input/Input'
import Avatar from '../../../../components/avatar/Avatar'
import DropdownAvatar from '../../../../components/dropdown/DropdownAvatar'
import AvatarDropdown from '../../../../components/avatar-dropdown/AvatarDropdown'
import List from '../../../../components/list/List'
import ListItem from '../../../../components/list/ListItem'
import Link from '../../../../components/Link/Link'
import Button from '../../../../components/button/Button'

export default function Ticket() {
  return (
    <div className={S['ticket-page']}>
      <header className={S['ticket-page__header']}>
        <h3 className={S['ticket-page__title']}>Ticket Title</h3>
        <div className={S['ticket-page__details']}>
          <span className={S['ticket-page__detail']}><User size={14} />sfwn</span>
          <span className={S['ticket-page__detail']}><Timer size={14} />2 weeks ago</span>
          <span className={S['ticket-page__detail']}>
            <Badge text='payment' variant='primary' />
            <Badge text='visa' variant='primary' />
            <Badge text='coupon' variant='primary' />
          </span>
        </div>
      </header>
      <article className={S['ticket-page__body']}>
        <div className={S['ticket-page__tabs']}>
          <span className={`${S['ticket-page__tab']} ${S['ticket-page__tab--active']}`}>conversation</span>
          <span className={S['ticket-page__tab']}>attachments</span>
        </div>
        <div className={`${S['ticket-page__reply-input']}`}>
          <Avatar />
          <Input type='text' placeholder='Replay...' />
        </div>
        <div className={`${S["ticket-page__replies"]}`}>
          <div className={`${S["ticket-page__reply"]}`}>
            {/* <div className={`${S['ticket-page__replyer']}`}> */}
            <div className={`${S["ticket-page__reply__avatar"]}`}>
              <AvatarDropdown>
                <List position='absolute' rightOrLeft='left'>
                  <ListItem>profile</ListItem>
                  <ListItem>tickets</ListItem>
                </List>
              </AvatarDropdown>
            </div>
            {/* </div> */}
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>
          <div className={`${S["ticket-page__reply"]}`}>
            {/* <div className={`${S['ticket-page__replyer']}`}> */}
            <div className={`${S["ticket-page__reply__avatar"]}`}>
              <AvatarDropdown>
                <List position='absolute' rightOrLeft='left'>
                  <ListItem>profile</ListItem>
                  <ListItem>tickets</ListItem>
                </List>
              </AvatarDropdown>
            </div>
            {/* </div> */}
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>
          <div className={`${S["ticket-page__reply"]}`}>
            <div className={`${S["ticket-page__reply__avatar"]}`}>
              <AvatarDropdown>
                <List position='absolute' rightOrLeft='left'>
                  <ListItem>profile</ListItem>
                  <ListItem>tickets</ListItem>
                </List>
              </AvatarDropdown>
            </div>
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>
          <div className={`${S["ticket-page__reply"]}`}>
            <div className={`${S["ticket-page__reply__avatar"]}`}>
              <AvatarDropdown>
                <List position='absolute' rightOrLeft='left'>
                  <ListItem>profile</ListItem>
                  <ListItem>tickets</ListItem>
                </List>
              </AvatarDropdown>
            </div>
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>
          <div className={`${S["ticket-page__reply"]}`}>
            <div className={`${S["ticket-page__reply__avatar"]}`}>
              <AvatarDropdown>
                <List position='absolute' rightOrLeft='left'>
                  <ListItem>profile</ListItem>
                  <ListItem>tickets</ListItem>
                </List>
              </AvatarDropdown>
            </div>
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>
          <div className={`${S["ticket-page__reply"]}`}>
            <AvatarDropdown>
              <List position='absolute' rightOrLeft='left'>
                <ListItem>profile</ListItem>
                <ListItem>tickets</ListItem>
              </List>
            </AvatarDropdown>
            <div className={`${S['ticket-page__replyer__relpy']}`}>
              <p className={`${S['ticket-page__replyer__name']}`}>Ali Khaled</p>
              <p className={`${S['ticket-page__replyer__date']}`}>Mar 26, 2024 03:34 PM (3 weeks ago)</p>
              <p className={`${S['ticket-page__replyer__message']}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis porro consectetur reprehenderit illum voluptatem nam quod quis, necessitatibus nihil soluta eius numquam ea explicabo ipsam ex officiis maxime repudiandae nisi.
              </p>
            </div>
          </div>

        </div>
      </article >
      <aside className={S['ticket-page__sidebar']}>
        <div className={S['ticket-page__sidebar__csr']}>
          <div className={S['ticket-page__sidebar__csr__info']}>
            <Avatar name='customer service' />
            <p className={S['ticket-page__sidebar__csr__name']}>customer service representitve</p>
          </div>
          <div className={S['ticket-page__sidebar__csr__team']}>
            <p className={S['ticket-page__sidebar__csr__team-name']}></p>
            <div>
              team: <Link href='' size='xs'>salse</Link>
            </div>
            <div>
              <Link size='xs' href='profile'>view profile</Link>
              <Link size='xs' href='ticket'>recent ticket</Link>
            </div>
          </div>
        </div>
      </aside>
    </div >
  )
}
