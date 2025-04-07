import {
  Blocks,
  ChartPie,
  Home,
  Settings,
  Ticket,
  TicketPlus,
  Tickets,
  Ungroup,
  User,
  UserPlus,
  Users
} from "lucide-react"
import {routesData} from "../routes/routes-data"

let id = 0
export const sidebarLinks = [
  {id: id++, icon: Home, title: 'home', path: '/dashboard'},
  {id: id++, icon: Tickets, title: 'tickets and inquiries', path: routesData.tickets.base},
  {id: id++, icon: Ticket, title: 'Ticket', path: routesData.tickets.id('1')},
  {id: id++, icon: TicketPlus, title: 'create ticket', path: routesData.tickets.create},
  {id: id++, icon: Blocks, title: 'departments', path: routesData.departments.base},
  {id: id++, icon: Ungroup, title: 'categories', path: routesData.categories.base},
  {id: id++, icon: ChartPie, title: 'metrics', path: routesData.metrics.base},
  {id: id++, icon: Users, title: 'users', path: routesData.users.base},
]
export const dashboardSidebarLinks = [
  {id: id++, icon: Home, title: 'home', path: '/dashboard'},
  {id: id++, icon: Tickets, title: 'tickets', path: 'tickets'},
  {id: id++, icon: Ticket, title: 'create ticket', path: 'tickets/create'},
  {id: id++, icon: Blocks, title: 'departments', path: 'departments'},
  {id: id++, icon: Blocks, title: 'create department', path: 'departments/create'},
  {id: id++, icon: Ungroup, title: 'categories', path: 'categories'},
  {id: id++, icon: Ungroup, title: 'create category', path: 'categories/create'},
  {id: id++, icon: ChartPie, title: 'metrics', path: 'metrics'},
  {id: id++, icon: Users, title: 'users', path: 'users'},
  {id: id++, icon: UserPlus, title: 'create user', path: 'users/create'},
]

export const sidebarSettingsLinks = [
  {id: id++, icon: User, title: 'profile', path: routesData.users.current},
  {id: id++, icon: Settings, title: 'settings', path: routesData.settings.base},
]

export const tableDataTest = [
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
  {id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved'},
]