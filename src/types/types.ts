import { AxiosError } from "axios"
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
  name: string
  color: string
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
  tags: ITag[],
  department: { _id: string, title: string }
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

