import { AxiosError } from "axios"

export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: Role,
  createdAt?: string,
  updatedAt?: string,
}
export type TAxiosError = AxiosError<{ msg: string | { [key: string]: string }[] }>

export type Role = 'admin' | 'manager' | 'csr' | 'view_only'