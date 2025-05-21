import AvatarDropdown from '../avatar-dropdown/AvatarDropdown'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Cookies from 'js-cookie'
import useGetCurrentUser from '../../hooks/useGetCurrentUser'


export default function NavDropdown() {
  const currentUserQuery = useGetCurrentUser()

  const onLogout = () => {
    Cookies.remove('TOKEN')
    window.location.pathname = '/login'
  }
  return (
    <AvatarDropdown name={currentUserQuery?.data?.name ?? 'name'}>
      <List position={'absolute'} rightOrLeft={'right'} yaxis='top'>
        {
          currentUserQuery?.data?.name ?
            <>
              <ListItem href='/dashboard'>Dashboard</ListItem>
              <ListItem href='/dashboard/users'>Users</ListItem>
              <ListItem onClick={onLogout}>
                Sign out
              </ListItem>
            </>
            :
            <>
              <ListItem href='/' noStyle>home</ListItem>
              <ListItem href='/login' noStyle>
                login
              </ListItem>
            </>
        }
      </List>
    </AvatarDropdown>
  )
}