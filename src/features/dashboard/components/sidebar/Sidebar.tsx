import Style from './Sidebar.module.css'
import { useDashboard } from '../../../../store/dashboard.store'
import SidebarUser from '../sidebarUser/SidebarUser'
import SidebarPagesLinks from '../sidebarPagesLinks/SidebarPagesLinks'
import SidebarSettingPagesLinks from '../sidebarSettingPagesLinks/SidebarSettingPagesLinks'
import SidebarHeader from '../sidebarHeader/SidebarHeader'
import Spacer from '../../../../components/spacer/Spacer'

export default function Sidebar() {
  const { isSidebarVisible } = useDashboard((state) => state)

  return (
    <aside className={`${Style.sidebar} ${isSidebarVisible && Style['sidebar--collapse']}`}>
      <SidebarHeader />
      <SidebarPagesLinks />
      <Spacer size='3xl'/>
      <SidebarSettingPagesLinks />
      <SidebarUser />
    </aside>
  )
}
