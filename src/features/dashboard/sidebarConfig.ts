import {
  Blocks,
  ChartPie,
  Home,
  Settings,
  Ticket,
  Tickets,
  Ungroup,
  User,
  UserPlus,
  Users
} from "lucide-react"
let id = 0

export const sidebarSettingPagesLinks = [
  { id: id++, icon: User, title: 'profile', path: '/dashboard/profile' },
  { id: id++, icon: Settings, title: 'settings', path: '/dashboard/profile/settings' },
]

export const sidebarPagesLinks = [
  { id: id++, icon: Home, title: 'home', path: '/dashboard' },
  { id: id++, icon: Tickets, title: 'tickets', path: '/dashboard/tickets' },
  { id: id++, icon: Ticket, title: 'create ticket', path: '/dashboard/tickets/create' },
  { id: id++, icon: Blocks, title: 'departments', path: '/dashboard/departments' },
  { id: id++, icon: Ungroup, title: 'tags', path: '/dashboard/tags' },
  { id: id++, icon: ChartPie, title: 'metrics', path: '/dashboard/metrics' },
  { id: id++, icon: Users, title: 'users', path: '/dashboard/users' },
  { id: id++, icon: UserPlus, title: 'create user', path: '/dashboard/users/create' },
]
