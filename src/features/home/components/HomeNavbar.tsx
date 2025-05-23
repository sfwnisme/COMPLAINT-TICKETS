import NavDropdown from '../../../components/nav-dropdown/NavDropdown'
import Style from './HomeNavbar.module.css'

export default function HomeNavbar() {
  return (
    <nav className={Style.navbar}>
      <span className={Style['navbar__divider']}></span>
      <NavDropdown />
    </nav>
  )
}
