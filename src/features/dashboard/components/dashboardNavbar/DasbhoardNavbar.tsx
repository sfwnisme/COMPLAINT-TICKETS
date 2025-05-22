import Button from '../../../../components/button/Button'
import { Bell, Menu } from 'lucide-react'
import NavDropdown from '../../../../components/nav-dropdown/NavDropdown'
import { useDashboard } from '../../../../store/dashboard.store'
import Style from './DashboardNavbar.module.css'

export default function DasbhoardNavbar() {
  const { toggleSidebar } = useDashboard()

  return (
    <nav className={Style.navbar}>
      <div className={Style['navbar__sidebar-button']}>
        <Button onClick={toggleSidebar} size='square' shape='soft'>
          <Menu size={24} strokeWidth={1.5} />
        </Button>
      </div>
      <div className={`${Style["navbar__notification"]} ${Style['navbar__notification--active']}`}>
        <Button size="square" shape='none'>
          <Bell size={18} className={Style['navbar__notification-icon']} />
        </Button>
      </div>
      <NavDropdown />
    </nav>
  )
}
