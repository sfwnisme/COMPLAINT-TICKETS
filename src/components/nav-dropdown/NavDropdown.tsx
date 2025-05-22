import AvatarDropdown from '../avatar-dropdown/AvatarDropdown'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Cookies from 'js-cookie'
import useGetCurrentUser from '../../hooks/useGetCurrentUser'
import Skeleton from '../skeleton/Skeleton'


export default function NavDropdown() {
  const { data: currentUser, isLoading } = useGetCurrentUser()

  const onLogout = () => {
    Cookies.remove('TOKEN')
    window.location.pathname = '/login'
  }
  if (isLoading) {
    return <Skeleton height='30px' width='30px' />
  }
  return (
    <AvatarDropdown name={currentUser?.name ?? 'name'}>
      <List position={'absolute'} rightOrLeft={'right'} yaxis='top'>
        {
          currentUser?.name ?
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