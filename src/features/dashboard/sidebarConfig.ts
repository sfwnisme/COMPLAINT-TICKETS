import {
  Blocks,
  // ChartPie,
  Home,
  Settings,
  Ticket,
  Tickets,
  Ungroup,
  User,
  UserPlus,
  Users
} from "lucide-react"
import { USER_ROLES } from "../../constraints/constraints"
import { RouteConfig } from "../../types/types"
let id = 0

export const sidebarSettingPagesLinks = [
  { id: id++, icon: User, title: 'profile', path: '/dashboard/profile' },
  { id: id++, icon: Settings, title: 'settings', path: '/dashboard/profile/settings' },
]

export const sidebarPagesLinks: RouteConfig[] = [
  { id: id++, icon: Home, title: 'home', path: '/dashboard', permission: [...Object.values(USER_ROLES)] },
  { id: id++, icon: Tickets, title: 'tickets', path: '/dashboard/tickets', permission: [...Object.values(USER_ROLES)] },
  { id: id++, icon: Ticket, title: 'create ticket', path: '/dashboard/tickets/create', permission: [USER_ROLES.admin, USER_ROLES.manager, USER_ROLES.csr] },
  { id: id++, icon: Blocks, title: 'departments', path: '/dashboard/departments', permission: [...Object.values(USER_ROLES)] },
  { id: id++, icon: Ungroup, title: 'tags', path: '/dashboard/tags', permission: [...Object.values(USER_ROLES)] },
  // { id: id++, icon: ChartPie, title: 'metrics', path: '/dashboard/metrics', permission: [...Object.values(USER_ROLES)] },
  { id: id++, icon: Users, title: 'users', path: '/dashboard/users', permission: [...Object.values(USER_ROLES)] },
  { id: id++, icon: UserPlus, title: 'create user', path: '/dashboard/users/create', permission: [USER_ROLES.admin, USER_ROLES.manager, USER_ROLES.csr] },
]
