export type Role = 'admin' | 'manager' | 'csr' | 'view_only'

export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: Role,
  createdAt?: Date,
  updatedAt?: Date,
}