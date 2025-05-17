import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { z } from "zod";
import { createUserSchema, loginSchema, updateUserSchema } from "./schemas/user.schema";

type LoginFormInputs = z.infer<typeof loginSchema>
type CreateUserFormInputs = z.infer<typeof createUserSchema>;
type UpdateUserFormInputs = z.infer<typeof updateUserSchema>
type InputsType<T extends FieldValues> = {
  name: Path<T>;
  type: "text" | "email" | "password";
  placeholder?: string;
  title?: string;
  message?: string;
};


/** 
 * @param errors react hook form errors object
 * @returns array of inputs' attributes' data, you can loop instead of write them manually
 */
export const getupdateUserInputsConfigs = (errors: FieldErrors<UpdateUserFormInputs>) => {
  const inputs: InputsType<Omit<UpdateUserFormInputs, 'role'>>[] = [
    { name: 'name', type: 'text', placeholder: 'Write name', title: 'Name', message: errors?.name && `${errors?.name?.type}: ${errors?.name?.message}` },
    { name: 'email', type: 'email', placeholder: 'Write email', title: 'Email', message: errors?.email && `${errors?.email?.type}: ${errors?.email?.message}` },
    { name: 'password', type: 'text', placeholder: 'Write new password', title: 'Password', message: errors?.password && `${errors?.password?.type}: ${errors?.password?.message}` },
  ]
  return inputs
}

/** 
 * @param errors react hook form errors object
 * @returns array of inputs' attributes' data, you can loop instead of write them manually
 */
export const getCreateUserInputsConfigs = (errors: FieldErrors<CreateUserFormInputs>) => {
  const inputs: InputsType<Omit<CreateUserFormInputs, 'role'>>[] = [
    { name: 'name', type: 'text', placeholder: 'Write name', title: 'Name', message: errors?.name && `${errors?.name?.type}: ${errors?.name?.message}` },
    { name: 'email', type: 'email', placeholder: 'Write email', title: 'Email', message: errors?.email && `${errors?.email?.type}: ${errors?.email?.message}` },
    { name: 'password', type: 'password', placeholder: 'Write password', title: 'Password', message: errors?.password && `${errors?.password?.type}: ${errors?.password?.message}` },
  ]
  return inputs
}

export const getLoginInputsConfigs = (errors: FieldErrors<LoginFormInputs>) => {
  const inputs: InputsType<Omit<LoginFormInputs, 'role'>>[] = [
    { name: 'email', type: 'email', placeholder: 'Write email', title: 'email', message: errors?.email && `${errors?.email?.type}: ${errors?.email?.message}` },
    { name: 'password', type: 'password', placeholder: 'Write password', title: 'Password', message: errors?.password && `${errors?.password?.type}: ${errors?.password?.message}` },
  ]
  return inputs
}


