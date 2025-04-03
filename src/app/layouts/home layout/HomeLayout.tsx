import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from '../../../components/button/Button'
import S from './HomeLayout.module.css'
import { AvatarDropdown } from '../../../components'
import List from '../../../components/list/List'
import ListItem from '../../../components/list/ListItem'
import { LogOut } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../../store/users'
import Login from '../../auth/login/Login'
import NavDropdown from '../../../components/nav-dropdown/NavDropdown'

type Props = {}

function Nav() {
  const currentUserQuery = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    select: (res) => {
      return res.data.data
    }
  })
  console.log(currentUserQuery.data)
  return (
    <nav className={S.navbar}>
      <span className={S['navbar__divider']}></span>
      <NavDropdown />
    </nav>
  )
}

export default function HomeLayout({ }: Props) {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}