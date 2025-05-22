import { NavLink } from 'react-router-dom'
import Style from './SidebarPagesLinks.module.css'
import { sidebarPagesLinks } from '../../sidebarConfig'

export default function SidebarPagesLinks() {
  const content = sidebarPagesLinks?.map((link) =>
    <li key={link?.id} className={Style['sidebar__item']}>
      <NavLink
        to={link?.path}
        title={link?.title}
        className={Style.sidebar__link}
      >
        <link.icon size={24} className={Style['sidebar__icon']} />
        {link?.title}
      </NavLink>
    </li>
  )
  return (
    <div className={Style["sidebar__body-content"]}>
      <ul className={Style['sidebar__list']}>
        {content}
      </ul>
    </div>
  )
}
