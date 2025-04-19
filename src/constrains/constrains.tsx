import { Role } from "../types/types"

export const USER_ROLES: { [key: string]: Role } = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  CSR: 'csr',
  VIEW_ONLY: 'view_only',
}
export const USER_ROLES_VALUES = ['admin', 'manager', 'csr', 'view_only'] as const

export const USER_ROLES_COLORS = {
  admin: 'success',
  manager: 'warning',
  csr: 'info',
  view_only: 'primary'
}