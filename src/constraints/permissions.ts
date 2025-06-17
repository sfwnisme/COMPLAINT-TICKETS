import { Role, Permission, Routes } from "../types/types";

const FULL_ACCESS: Permission = {
  canView: true,
  canCreate: true,
  canEdit: true,
  canDelete: true,
}
const CANT_DELETE_ACCESS: Permission = {
  canView: true,
  canCreate: true,
  canEdit: true,
  canDelete: false,
}
const VIEW_ONLY_ACCESS: Permission = {
  canView: true,
  canCreate: false,
  canEdit: false,
  canDelete: false,
}
export const PERMISSIONS: Record<Role, Record<Routes, Permission>> = {
  admin: {
    user: FULL_ACCESS,
    ticket: FULL_ACCESS,
    comment: FULL_ACCESS,
    department: FULL_ACCESS,
    tag: FULL_ACCESS
  },
  manager: {
    user: CANT_DELETE_ACCESS,
    ticket: CANT_DELETE_ACCESS,
    comment: FULL_ACCESS,
    department: FULL_ACCESS,
    tag: FULL_ACCESS
  },
  csr: {
    user: VIEW_ONLY_ACCESS,
    ticket: CANT_DELETE_ACCESS,
    comment: {
      canView: true,
      canCreate: true,
      canEdit: false,
      canDelete: false,
    },
    department: CANT_DELETE_ACCESS,
    tag: FULL_ACCESS
  },
  view_only: {
    user: VIEW_ONLY_ACCESS,
    ticket: VIEW_ONLY_ACCESS,
    comment: VIEW_ONLY_ACCESS,
    department: VIEW_ONLY_ACCESS,
    tag: VIEW_ONLY_ACCESS
  },
}


//NOTES
//- normal user can update the ticket if he is assigned to it
//- normal user can create a comment on a ticket if he is assigned to it
