import Style from './SidebarUser.module.css'
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'
import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import Button from '../../../../components/button/Button'
import UserChip from '../../../../components/userChip/UserChip'

export default function SidebarUser() {
  const { data: currentUser, isLoading } = useGetCurrentUser()

  if (isLoading) {
    return <SidebarUser />
  }
  const handleSignOut = () => {
    Cookies.remove('TOKEN')
    window.location.pathname = '/login'
  }

  return (
    <div className={Style['sidebar__user']}>
      <UserChip name={currentUser?.name ?? ""} avatarSize='sm' text={currentUser?.email} fontSize="sm" />
      <Button size='square' shape='soft' variant='danger' onClick={handleSignOut}>
        <LogOut size={20} />
      </Button>
    </div>
  )
}