import { FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "../../../schemas/user.schema.ts";
import Spacer from "../../../../../components/spacer/Spacer.tsx";
import SelectRole from "../selectRole/SelectRole.tsx";
import Alert from "../../../../../components/alert/Alert.tsx";
import Button from "../../../../../components/button/Button.tsx";
import Loader from "../../../../../components/loaders/loader/Loader.tsx";
import FormLayout from "../../../../../components/formLayout/FormLayout.tsx";
import InputsArray from "../../../../../components/inputsArray/InputsArray.tsx";
import useCreateUser from "../../../hooks/use-create-user.ts";

type Inputs = z.infer<typeof createUserSchema>;
type InputProps<T extends FieldValues> = {
  name: Path<T>;
  type: "text" | "email" | "password";
  placeholder?: string;
  title?: string;
  message?: string;
};
export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
    mode: "all",
  });

  const inputs: InputProps<Omit<Inputs, 'role'>>[] = [
    { name: 'name', type: 'text', placeholder: 'Write name', title: 'Name', message: errors?.name && `${errors?.name?.type}: ${errors?.name?.message}` },
    { name: 'email', type: 'text', placeholder: 'Write email', title: 'Email', message: errors?.email && `${errors?.email?.type}: ${errors?.email?.message}` },
    { name: 'password', type: 'password', placeholder: 'Write password', title: 'Password', message: errors?.password && `${errors?.password?.type}: ${errors?.password?.message}` },
  ]

  const { mutateAsync, isPending, isSuccess, isError, error } = useCreateUser();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await mutateAsync(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  };
  const showAlert = isSuccess || isError

  let typedError;
  if (axios.isAxiosError(error)) {
    typedError = error;
  }
  const errorMessage = typedError?.response?.data?.msg
  const successMessage = 'The user created successfull, you can now log in to activeate the account';
  const canCreate = !isPending && isValid

  return (
    <FormLayout title="User details" subtitle="enter user details to create an account" onSubmit={handleSubmit(onSubmit)}>
      <InputsArray<Inputs> inputs={inputs} register={register} />
      <SelectRole {...register('role')} title="Role" id='roles' />
      <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon >
        {errorMessage ?? successMessage}
      </Alert>
      <Button width="fill" variant="primary" disabled={!canCreate}>{isPending ? <Loader /> : "Create"}</Button>
      <Spacer />
    </FormLayout>
  );
}
