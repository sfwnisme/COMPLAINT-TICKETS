import S from "./CreateUserForm.module.css";
import Input from "../../input/Input.tsx";
import Select from "../../select/Select.tsx";
import { USER_ROLES } from "../../../constrains/constrains.tsx";
import Title from "../../title/Title.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../button/Button.tsx";
import Loader from "../../loaders/loader/Loader.tsx";
import useCreateApiData from "../../../hooks/use-create-api-data.tsx";
import useApiMessage from "../../../hooks/use-api-message.tsx";
import { AxiosError } from "axios";
import { TAxiosError } from "../../../types/types.ts";

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
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutateAsync: createUser, isPending, error } = useCreateApiData<Inputs>('/users/register', 'post')
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // console.log("new user data", data);
      const res = await createUser(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };
  const errorMessage = useApiMessage((error as TAxiosError)?.response?.data?.msg, "danger")
  console.log(errors)

  return (
    <div className={S.create_user_form__container}>
      {errorMessage}
      <Title text="Create User" />
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
        <Input
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
        <Button>{isPending ? <Loader /> : "Create"}</Button>
      </form>
    </div>
  );
}
