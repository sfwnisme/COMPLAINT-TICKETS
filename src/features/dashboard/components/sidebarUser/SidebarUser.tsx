import { Avatar } from '../../../../components'
import Style from './SidebarUser.module.css'
import Dropdown from '../../../../components/dropdown/Dropdown'
import List from '../../../../components/list/List'
import ListItem from '../../../../components/list/ListItem'
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'

export default function SidebarUser() {
  const { data: currentUser, isLoading } = useGetCurrentUser()

  if (isLoading) {
    return <SidebarUser />
  }

  return (
    <div className={Style['sidebar__user']}>
      <Avatar name={currentUser?.name} />
      <div className={Style['sidebar__user__info']}>
        <p className={Style['sidebar__user__name']}>{currentUser?.name}</p>
        <p className={Style['sidebar__user__email']}>{currentUser?.email}</p>
      </div>
      <Dropdown>
        <List position='absolute' rightOrLeft='right'>
          <ListItem>Users</ListItem>
          <ListItem>Tickets</ListItem>
          <ListItem>Sign out</ListItem>
        </List>
      </Dropdown>
    </div>
  )
}