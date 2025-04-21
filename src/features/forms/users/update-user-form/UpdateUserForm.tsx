import S from "./UpdateUserForm.module.css";
import Input from "../../../../components/input/Input.tsx";
import Select from "../../../../components/select/Select.tsx";
import { USER_ROLES } from "../../../../constrains/constrains.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../components/button/Button.tsx";
import Loader from "../../../../components/loaders/loader/Loader.tsx";
import Spacer from "../../../../components/spacer/Spacer.tsx";
import PasswordInput from "../../../../components/input/PasswordInput.tsx";
import useUpdateApiData from "../../../../hooks/use-update-api-data.tsx";
import { useParams } from "react-router-dom";
import useGetSingleApiData from "../../../../hooks/use-get-single-api-data.tsx";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "../../../../validation/user.validation.tsx";
import Alert from "../../../../components/alert/Alert.tsx";

type Inputs = z.infer<typeof updateUserSchema>

export default function UpdateUserForm() {
  const { userId } = useParams()
  console.log(userId)
  const { data } = useGetSingleApiData({ endpoint: '/users', id: userId })
  console.log('new data ', data)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(updateUserSchema),
    mode: 'all',
    values: {
      name: data?.name,
      email: data?.email,
      role: data?.role
    }
  });
  const { mutateAsync: updateUser, isPending, isSuccess, isError, error } = useUpdateApiData<Inputs>(`/users/${userId}`, 'patch')
  const showAlert = isSuccess || isError
  let typedError
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  const successMessage = 'user updated successfully'
  const errorMessage = typedError?.response?.data?.msg

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await updateUser(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };

  return (
    <div className={S.update_user_form__container}>
      <div className={S['form-header']}>
        <h2 className={S['form-header-title']}>Update User</h2>
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
        <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon>
          {errorMessage ?? successMessage}
        </Alert>
        <Button width="fill">{isPending ? <Loader /> : "Create"}</Button>
      </form>
    </div>
  );
}
