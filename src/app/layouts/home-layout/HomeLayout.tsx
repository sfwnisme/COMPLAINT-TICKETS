import { Outlet } from 'react-router-dom'
import S from './HomeLayout.module.css'
import NavDropdown from '../../../components/nav-dropdown/NavDropdown'


function Nav() {
  return (
    <nav className={S.navbar}>
      <span className={S['navbar__divider']}></span>
      <NavDropdown />
    </nav>
  )
}

export default function HomeLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}