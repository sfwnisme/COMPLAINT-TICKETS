import { z } from "zod"
import { loginSchema } from "./schemas/login.schema"
import { FieldErrors } from "react-hook-form"
import { InputsType } from "../../types/types"

type LoginFormInputs = z.infer<typeof loginSchema>

export const getLoginInputsConfigs = (errors: FieldErrors<LoginFormInputs>) => {
  const inputs: InputsType<Omit<LoginFormInputs, 'role'>>[] = [
    { name: 'email', type: 'email', placeholder: 'Write email', title: 'email', message: errors?.email && `${errors?.email?.type}: ${errors?.email?.message}` },
    { name: 'password', type: 'password', placeholder: 'Write password', title: 'Password', message: errors?.password && `${errors?.password?.type}: ${errors?.password?.message}` },
  ]
  return inputs
}
