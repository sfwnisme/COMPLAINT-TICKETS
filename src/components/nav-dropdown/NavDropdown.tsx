import React from 'react'
import AvatarDropdown from '../avatar-dropdown/AvatarDropdown'
import List from '../list/List'
import { getCurrentUser } from '../../store/users'
import { useQuery } from '@tanstack/react-query'
import ListItem from '../list/ListItem'
import Button from '../button/Button'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


export default function NavDropdown() {
  const navigate = useNavigate()
  const currentUserQuery = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    select: (res) => {
      return res.data.data
    }
  })

  const onLogout = () => {
    Cookies.remove('TOKEN')
    window.location.pathname = '/login'
  }
  return (
    <AvatarDropdown name={currentUserQuery?.data?.name}>
      <List position={'absolute'} rightOrLeft={'right'} yaxis='top'>
        {
          currentUserQuery?.data?.name ?
            <>
              <ListItem href='/dashboard'>Dashboard</ListItem>
              <ListItem href='/dashboard/users'>Users</ListItem>
              <Button size='lg' variant='primary' width='fill' onClick={onLogout}>
                logout
              </Button>
            </>
            :
            <>
              <ListItem href='/' noStyle>home</ListItem>
              <ListItem href='/login' noStyle>
                {/* <Button size='lg' variant='primary' width='fill'> */}
                login
                {/* </Button> */}
              </ListItem>
            </>
        }
      </List>
    </AvatarDropdown>
  )
}