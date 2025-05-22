import { Avatar } from '../../../../components'
import Style from './SidebarUser.module.css'
import useGetCurrentUser from '../../../../hooks/useGetCurrentUser'
import Cookies from 'js-cookie'
import { LogOut } from 'lucide-react'
import Button from '../../../../components/button/Button'

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
      <Avatar name={currentUser?.name} />
      <div className={Style['sidebar__user__info']}>
        <p className={Style['sidebar__user__name']}>{currentUser?.name}</p>
        <p className={Style['sidebar__user__email']}>{currentUser?.email}</p>
      </div>
      <Button size='square' shape='soft' variant='danger' onClick={handleSignOut}>
        <LogOut size={20} />
      </Button>
    </div>
  )
}