import S from "./UpdateUserForm.module.css";
import Input from "../../input/Input.tsx";
import Select from "../../select/Select.tsx";
import { USER_ROLES } from "../../../constrains/constrains.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../button/Button.tsx";
import Loader from "../../loaders/loader/Loader.tsx";
import useApiMessage from "../../../hooks/use-api-message.tsx";
import Spacer from "../../spacer/Spacer.tsx";
import PasswordInput from "../../input/PasswordInput.tsx";
import useUpdateApiData from "../../../hooks/use-update-api-data.tsx";
import { useParams } from "react-router-dom";
import useGetSingleApiData from "../../../hooks/use-get-single-api-data.tsx";
import axios from "axios";

type Inputs = {
  name: string;
  email: string;
  password?: string;
  role: string;
};

export default function UpdateUserForm() {

  const { userId } = useParams()
  console.log(userId)
  const { data } = useGetSingleApiData('/users/' + userId)
  console.log('new data ', data)
  const {
    register,
    handleSubmit,
    // formState,
  } = useForm<Inputs>({
    reValidateMode: 'onChange',
    values: {
      name: data?.name,
      email: data?.email,
      role: data?.role
    }
  });
  const { mutateAsync: createUser, isPending, isSuccess, error } = useUpdateApiData<Inputs>(`/users/${userId}`, 'post')

  let typedError
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  const successMessage = useApiMessage('user created successfully', 201)
  const errorMessge = useApiMessage(typedError?.response?.data?.msg, typedError?.status || 400)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createUser(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };

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
        {isSuccess ? successMessage : errorMessge}
      </form>
    </div>
  );
}
