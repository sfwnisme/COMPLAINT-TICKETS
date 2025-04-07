import React, {useState} from 'react'
import S from './DashboardLayout.module.css'
import Button from '../../../components/button/Button'
import {Bell, Menu, Search, X} from 'lucide-react'
import {dashboardSidebarLinks, sidebarSettingsLinks} from '../../../libs/data-center'
import Input from '../../../components/input/Input'
import useMedia from '../../../hooks/use-media'
import Logo from '../../../assets/logo.png'
import {NavLink, Outlet} from 'react-router-dom'
import NavDropdown from '../../../components/nav-dropdown/NavDropdown'

function Nav({collapseASide}: { readonly collapseASide: () => void }) {
  return (
    <nav className={S.navbar}>
      <Button onClick={collapseASide} size='square' outline>
        <Menu size={24} strokeWidth={1.5}/>
      </Button>
      <span className={S['navbar__divider']}></span>
      <label className={S["navbar__search-box"]}>
        <Search size={30} strokeWidth='1.5' className={S["navbar__search-icon"]}/>
        <Input type='search' placeholder='Search...'/>
      </label>

      <div className={`${S["navbar__notification"]} ${S['navbar__notification--active']}`}>
        <Bell size={18} className={S['navbar__notification-icon']}/>
      </div>
      <NavDropdown/>
    </nav>
  )
}

function ASide({collapseASide}: { readonly collapseASide: () => void }) {
  const sidebarLinksContent = dashboardSidebarLinks?.map((link) => (
    <li key={link?.id} className={S['aside__item']}>
      <NavLink
        to={link?.path}
        title={link?.title}
        className={S.aside__link}
      >
        <link.icon size={24} className={S['aside__icon']}/>
        {link?.title}
      </NavLink>
    </li>
  ))

  const renderSidebarSettingsLinks = sidebarSettingsLinks?.map((link) => (
    <li key={link.id} className={S['aside__item']}>
      <a
        href={String(link.path)}
        title={link?.title}
        className={S.aside__link}
      >
        <link.icon size={24} className={S['aside__icon']}/>
        {link?.title}
      </a>
    </li>
  ))

  return (
    <aside className={S.aside}>
      <div className={S["aside__header"]}>
        <img className={S['aside__logo']} src={Logo} alt=""/>
        <Button size='square' variant='primary' className={S['aside__collapse-btn']} onClick={collapseASide}>
          <X size={24}/>
        </Button>
      </div>
      <div className={S["aside__content"]}>
        <ul className={S['aside__list']}>
          {sidebarLinksContent}
        </ul>
      </div>
      <div className={`${S['aside__others']} ${S['aside__content']}`}>
        <h4 className={S['aside__others__title']}>others:</h4>
        <ul className={S['aside__list']}>
          {renderSidebarSettingsLinks}
        </ul>
      </div>
    </aside>
  )
}

type Props = React.ReactNode

export default function DashboardLayout() {
  const media = useMedia()
  const [collapse, setCollapse] = useState(Boolean(media < 768))
  const collapseASide = () => {
    setCollapse((prev) => !prev)
    console.log(collapse)
  }
  return (
    <div className={`${S.layout} ${collapse && S.layout_collapse}`}>
      <ASide collapseASide={collapseASide}/>
      <Nav collapseASide={collapseASide}/>
      <main className={S.outlet}>
        {/*{children}*/}
        <Outlet />
      </main>
    </div>
  )
}