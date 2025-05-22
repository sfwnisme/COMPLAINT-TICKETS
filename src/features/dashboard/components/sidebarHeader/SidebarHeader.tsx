import Style from './SidebarHeader.module.css'
import Logo from '../../../../assets/logo.png'
import { useDashboard } from '../../../../store/dashboard.store'
import Button from '../../../../components/button/Button'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function SidebarHeader() {
  const { toggleSidebar } = useDashboard((state) => state)
  return (
    <div className={Style["sidebar__header"]}>
      <NavLink to='/dashboard'>
        <img className={Style['sidebar__logo']} src={Logo} alt="" />
      </NavLink>
      <Button onClick={toggleSidebar} size='square' shape='none'>
        <X size={25} />
      </Button>
    </div>
  )
}
