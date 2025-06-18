import React from 'react'
import useGetCurrentUser from '../../hooks/useGetCurrentUser'
import { Permission, Routes } from '../../types/types'
import { PERMISSIONS } from '../../constraints/permissions';

type Props = {
  permission: keyof Permission;
  route: Routes;
  children: React.ReactNode
  fallback?: React.ReactNode | string
}

export default function Can({ permission, route, children, fallback = null }: Readonly<Props>) {
  const currentUser = useGetCurrentUser()
  if (!currentUser?.data) {
    return null
  }
  const role = currentUser.data.role

  const hasAccess = PERMISSIONS[role][route][permission]

  if (!hasAccess) {
    return fallback
  }


  return <>{children}</>
}