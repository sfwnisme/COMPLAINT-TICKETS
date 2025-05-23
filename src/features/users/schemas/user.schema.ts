import { z } from "zod";
import { USER_ROLES_VALUES } from "../../../constraints/constraints";

const userSchema = {
  name: z.string().min(3, 'name should be at least 3 characters').max(20, 'name should be maximum 20 characters '),
  email: z.string().email(),
  password: z.string().min(4, 'password should be at least 4 characters'),
  role: z.enum(USER_ROLES_VALUES)
}

export const createUserSchema = z.object({
  ...userSchema
})

export const updateUserSchema = z.object({
  ...userSchema,
  password: userSchema.password.optional()
})