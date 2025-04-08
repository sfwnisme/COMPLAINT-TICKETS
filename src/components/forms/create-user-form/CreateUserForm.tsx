import S from "./CreateUserForm.module.css";
import Input from "../../input/Input.tsx";
import Select from "../../select/Select.tsx";
import { USER_ROLES } from "../../../constrains/constrains.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../button/Button.tsx";
import Loader from "../../loaders/loader/Loader.tsx";
import useCreateApiData from "../../../hooks/use-create-api-data.tsx";
import useApiMessage from "../../../hooks/use-api-message.tsx";
import { TAxiosError } from "../../../types/types.ts";
import Spacer from "../../spacer/Spacer.tsx";
import Logo from '../../../assets/logo.png'
import PasswordInput from "../../input/PasswordInput.tsx";

type Inputs = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutateAsync: createUser, isPending, isSuccess, isError, error } = useCreateApiData<Inputs>('/users/register', 'post')
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createUser(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };
  let responseMessage
  if (isError) {
    responseMessage = useApiMessage((error as TAxiosError)?.response?.data?.msg, error?.status)
  } else if (isSuccess) {
    responseMessage = useApiMessage('user created successfully', 201)
  }
  // const errorMessage = useApiMessage((error as TAxiosError)?.response?.data?.msg, error?.status)
  console.log(errors)

  return (
    <div className={S.create_user_form__container}>
      <div className={S['form-header']}>
        {/* <div>
          <img src={Logo} height={40} className={S['form-header-logo']} alt='logo' />
        </div> */}
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
        />
        <Input
          type="text"
          {...register("email")}
          placeholder="email"
          title="Email"
        />
        <PasswordInput
          type="password"
          placeholder="password"
          title="Password"
          {...register("password")}
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
        {/* {errorMessage} */}
        {responseMessage}
      </form>
    </div>
  );
}
