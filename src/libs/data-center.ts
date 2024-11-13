import { Blocks, ChartPie, FolderDot, Home, List, RectangleEllipsis, Settings, Ticket, TicketCheck, TicketPlus, Tickets, TicketSlash, Ungroup, User } from "lucide-react"
import { routes } from "../routes/routes-data"

let id = 0
export const sidebarLinks = [
  { id: id++, icon: Home, title: 'home', path: routes.tickets.base },
  { id: id++, icon: Tickets, title: 'tickets and inquiries', path: routes.tickets.base },
  { id: id++, icon: Ticket, title: 'Ticket', path: routes.tickets.id('1') },
  { id: id++, icon: TicketPlus, title: 'create ticket', path: routes.tickets.create },
  { id: id++, icon: Blocks, title: 'departments', path: routes.departments.base },
  { id: id++, icon: Ungroup, title: 'categories', path: routes.categories.base },
  { id: id++, icon: ChartPie, title: 'metrics', path: routes.metrics.base },
]

export const sidebarLinksSettings = [
  { id: id++, icon: User, title: 'profile', path: routes.users.current },
  { id: id++, icon: Settings, title: 'settings', path: routes.settings.base },
]

export const tableDataTest = [
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
  { id: id++, name: 'sfwn', issue: 'losted item', ref: '343599759', department: 'sales', status: 'solved' },
]