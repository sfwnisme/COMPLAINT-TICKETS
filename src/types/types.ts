import { AxiosError } from "axios"
import { LucideIcon } from "lucide-react"
import { FieldValues, Path } from "react-hook-form"
export type TAxiosError = AxiosError<{ msg: string | { [key: string]: string }[] }>


//-----------------------------
// User
//-----------------------------
export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: Role,
  createdAt?: string,
  updatedAt?: string,
}
export type Role = 'admin' | 'manager' | 'csr' | 'view_only'

//-----------------------------
// Ticket
//-----------------------------
export type Status = "open" | "in-progress" | "resolved" | "closed"
export type Priority = 'low' | 'medium' | 'high' | 'critical'
export interface ITag {
  _id: string,
  name: string,
  color: string,
  createdAt?: string,
  updatedAt?: string,
}
export interface IDepartment {
  _id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
}
export interface ITicket {
  _id: string,
  title: string,
  description?: string,
  status: Status,
  priority: Priority,
  createdBy: { _id: string, name: string },
  assignedTo: { _id: string, name: string },
  tags: ITag[],
  department: { _id: string, title: string },
  images: FileList[]
  createdAt?: string,
  updatedAt?: string
}

export interface IComment {
  _id: string,
  content: string,
  author: { _id: string, name: string },
  ticket: { _id: string, title: string },
  isSolution: boolean,
  createdAt: string,
  updatedAt: string,
}

//-----------------------------
// Components
//-----------------------------
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variants = 'primary' | 'info' | 'warning' | 'success' | 'danger';

export type InputsType<T extends FieldValues> = {
  name: Path<T>;
  type: "text" | "email" | "password";
  placeholder?: string;
  title?: string;
  message?: string;
};


//-----------------------------
// Others
//-----------------------------
export type Permission = {
  canView: boolean,
  canCreate: boolean,
  canEdit: boolean,
  canDelete: boolean,
}
export type Routes = 'user' | 'ticket' | 'comment' | 'department' | 'tag'
export type Access = 'denied' | 'granted'

export type RouteConfig = {
  id: number,
  icon: LucideIcon,
  title: string,
  path: string,
  permission: Role[]
}