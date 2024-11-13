import React from 'react'
import List from '../../../components/list/List'
import ListItem from '../../../components/list/ListItem'
import Button from '../../../components/button/Button'
import AvatarDropdown from '../../../components/avatar-dropdown/AvatarDropdown'
import Avatar from '../../../components/avatar/Avatar'

type Props = {}

export default function Tickets({ }: Props) {
  return (
    <div>
      Tickets Page

      <AvatarDropdown>
        <List position='absolute' rightOrLeft='left'>
          <ListItem>home</ListItem>
          <ListItem>profile</ListItem>
          <ListItem href='23'>
            settings
          </ListItem>
          <ListItem noStyle>
            <Button size='xs' variant='info' width='fill'>Login</Button>
            <Button size='xs' variant='success' width='fill'>Register</Button>
          </ListItem>
        </List>
      </AvatarDropdown>
    </div >
  )
}