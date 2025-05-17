import { TVariants } from "../components/defintions.components"
import { Role } from "../types/types"

// USER----------------------
export const USER_ROLES: { [key: string]: Role } = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  CSR: 'csr',
  VIEW_ONLY: 'view_only',
}
export const USER_ROLES_VALUES = ['admin', 'manager', 'csr', 'view_only'] as const
export const USER_ROLES_COLORS: Record<string, TVariants> = {
  admin: 'success',
  manager: 'warning',
  csr: 'info',
  view_only: 'primary'
}
// END USER----------------------

// TICKET----------------------
export const TICKET_STATUS = ['open', 'in-progress', 'resolved', 'closed'] as const
export const TICKET_STATUS_COLORS: Record<string, TVariants> = {
  open: 'primary',
  'in-progress': 'info',
  resolved: 'success',
  closed: 'danger'
} as const
export const TICKET_PRIORITY = ['low', 'medium', 'high', 'critical'] as const
export const TICKET_PRIORITY_COLORS: Record<string, TVariants> = {
  low: 'primary',
  medium: 'info',
  high: 'warning',
  critical: 'danger'
} as const
// END TICKET----------------------
