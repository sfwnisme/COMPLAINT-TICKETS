import { useState } from 'react'
import S from './Layout.module.css'
import Button from '../../components/button/Button'
import { Bell, LogOut, Menu, Pill, Search, X } from 'lucide-react'
import { sidebarLinks, sidebarLinksSettings } from '../../libs/data-center'
import Input from '../../components/input/Input'
import AvatarDropdown from '../../components/avatar-dropdown/AvatarDropdown'
import List from '../../components/list/List'
import ListItem from '../../components/list/ListItem'
import useMedia from '../../hooks/use-media'

// type Props = {}

function Nav({ collapseASide }) {
  return (
    <nav className={S.navbar}>
      <Button onClick={collapseASide} size='square' outline>
        <Menu size={24} strokeWidth={1.5} />
      </Button>
      <span className={S['navbar__divider']}></span>
      <label className={S["navbar__search-box"]}>
        <Search size={30} strokeWidth='1.5' className={S["navbar__search-icon"]} />
        <Input type='search' placeholder='Search...' />
      </label>

      <div className={`${S["navbar__notification"]} ${S['navbar__notification--active']}`}>
        <Bell size={18} className={S['navbar__notification-icon']} />
      </div>
      <AvatarDropdown>
        <List position={'absolute'} rightOrLeft={'right'}>
          <ListItem>About</ListItem>
          <ListItem>Dashboard</ListItem>
          <ListItem>Profile</ListItem>
          <ListItem>Settings</ListItem>
          <Button size='xs' variant='danger' width='fill'><LogOut size={18} style={{ marginInline: 'auto' }} /></Button>
        </List>
      </AvatarDropdown>
    </nav>
  )
}
function ASide({ collapseASide }) {
  const sidbarLinksContent = sidebarLinks?.map((link) => (
    <li key={link?.id} className={S['aside__item']}>
      <a
        href={link?.path}
        about={link.title}
        title={link?.title}
        className={S.aside__link}
      >
        <link.icon size={24} className={S['aside__icon']} />
        {link?.title}
      </a>
    </li>
  ))

  const sidbarLinksContentSettings = sidebarLinksSettings?.map((link) => (
    <li key={link?.id} className={S['aside__item']}>
      <a
        href={link?.path}
        about={link.title}
        title={link?.title}
        className={S.aside__link}
      >
        <link.icon size={24} className={S['aside__icon']} />
        {link?.title}
      </a>
    </li>
  ))

  return (
    <aside className={S.aside}>
      <div className={S["aside__header"]}>
        <img className={S['aside__logo']} src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="" />
        <Button size='square' variant='primary' className={S['aside__collapse-btn']} onClick={collapseASide} >
          <X size={24} />
        </Button>
      </div>
      <div className={S["aside__content"]}>
        <ul className={S['aside__list']}>
          {sidbarLinksContent}
        </ul>
      </div>
      <div className={`${S['aside__others']} ${S['aside__content']}`}>
        <h4 className={S['aside__others__title']}>others:</h4>
        <ul className={S['aside__list']}>
          {sidbarLinksContentSettings}
        </ul>
      </div>
    </aside>
  )
}


export default function Layout({ children }: { children: React.ReactNode }) {
  const media = useMedia()
  const [collapse, setCollapse] = useState(media > 768 ? false : true)
  const collapseASide = () => {
    setCollapse((prev) => !prev)
    console.log(collapse)
  }
  return (
    <div className={`${S.layout} ${collapse && S.layout_collapse}`}>
      <ASide collapseASide={collapseASide} />
      <Nav collapseASide={collapseASide} />
      <main className={S.outlet} >
        {children}
      </main>
    </div>
  )
}