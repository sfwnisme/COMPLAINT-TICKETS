import { sidebarSettingPagesLinks } from '../../sidebarConfig'
import Style from './SidebarSettingPagesLinks.module.css'
import { NavLink } from 'react-router-dom'

export default function SidebarSettingPagesLinks() {
  const content = sidebarSettingPagesLinks?.map((link) => (
    <li key={link.id} className={Style['sidebar__item']}>
      <NavLink
        to={String(link.path)}
        title={link?.title}
        className={Style.sidebar__link}
      >
        <link.icon size={24} className={Style['sidebar__icon']} />
        {link?.title}
      </NavLink>
    </li>
  ))
  return (
    <div className={`${Style['sidebar__others']} ${Style['sidebar__body-content']}`}>
      <ul className={Style['sidebar__list']}>
        {content}
      </ul>
    </div>
  )
}
