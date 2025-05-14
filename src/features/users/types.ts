import { Role } from "../../types/types";

export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: Role,
  createdAt?: Date,
  updatedAt?: Date,
}