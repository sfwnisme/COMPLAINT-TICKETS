import { AxiosError } from "axios"

export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: Role,
  createdAt?: Date,
  updatedAt?: Date,
}
export type TAxiosError = AxiosError<{ msg: string | { [key: string]: string }[] }>

export type Role = 'admin' | 'manager' | 'csr' | 'view_only'