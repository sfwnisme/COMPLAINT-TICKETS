import S from "./CreateUserForm.module.css";
import Input from "../../input/Input.tsx";
import Select from "../../select/Select.tsx";
import { USER_ROLES, USER_ROLES_VALUES } from "../../../constrains/constrains.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../button/Button.tsx";
import Loader from "../../loaders/loader/Loader.tsx";
import useCreateApiData from "../../../hooks/use-create-api-data.tsx";
import useApiMessage from "../../../hooks/use-api-message.tsx";
import Spacer from "../../spacer/Spacer.tsx";
import PasswordInput from "../../input/PasswordInput.tsx";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  name: z.string().min(8, { message: '8 character at least' }),
  email: z.string().email(),
  password: z.string().min(8, {message: 'password at least should have 8 characters'}),
  role: z.enum(USER_ROLES_VALUES)
})
type Inputs = z.infer<typeof userSchema>

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
    mode: "all"
  });
  const { mutateAsync, isPending, isSuccess, error } = useCreateApiData<Inputs>('/users/register')

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await mutateAsync(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };

  let typedError
  if (axios.isAxiosError(error)) {
    typedError = error
  }

  const errorMessage = useApiMessage(typedError?.response?.data?.msg, typedError?.status ?? 400)
  const successMessage = useApiMessage('user created successfully', 201)

  return (
    <div className={S.create_user_form__container}>
      <div className={S['form-header']}>
        <h2 className={S['form-header-title']}>Create New User</h2>
        <p className={S['form-header-subtitle']}>please enter your details to sign in</p>
      </div>
      <Spacer size='lg' />
      <form className={S.create_user_form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("name")}
          placeholder="name"
          title="Name"
          message={errors?.name?.message}
          variant={errors?.name && 'danger'}
        />
        <Input
          type="text"
          {...register("email")}
          placeholder="email"
          title="Email"
          message={errors?.email?.message}
          variant={errors?.email && 'danger'}
        />
        <PasswordInput
          type="password"
          placeholder="password"
          title="Password"
          {...register("password")}
          message={errors?.password?.message}
          variant={errors?.password && 'danger'}
        />
        <Select {...register("role")} title="Role" id="roles">
          <option disabled value="">
            Select Role
          </option>
          {Object.values(USER_ROLES).map((role) => (
            <option key={role} value={role} id={role}>
              {role}
            </option>
          ))}
        </Select>
        <Button width="fill">{isPending ? <Loader /> : "Create"}</Button>
        <Spacer />
        {isSuccess ? successMessage : errorMessage}
        {errorMessage}
      </form>
    </div>
  );
}
