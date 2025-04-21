import S from "./CreateUserForm.module.css";
import Input from "../../../../components/input/Input.tsx";
import Select from "../../../../components/select/Select.tsx";
import { USER_ROLES } from "../../../../constrains/constrains.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../components/button/Button.tsx";
import Loader from "../../../../components/loaders/loader/Loader.tsx";
import useCreateApiData from "../../../../hooks/use-create-api-data.tsx";
import Spacer from "../../../../components/spacer/Spacer.tsx";
import PasswordInput from "../../../../components/input/PasswordInput.tsx";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "../../../../validation/user.validation.tsx";
import Alert from "../../../../components/alert/Alert.tsx";

type Inputs = z.infer<typeof createUserSchema>;
export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
    mode: "all",
  });
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateApiData<Inputs>("/users/register");
  console.log("error for create user", error);
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

  return (
    <div className={S.create_user_form__container}>
      <div className={S["form-header"]}>
        <h2 className={S["form-header-title"]}>Create New User</h2>
        <p className={S["form-header-subtitle"]}>
          please enter your details to sign in
        </p>
      </div>
      <Spacer size="lg" />
      <form className={S.create_user_form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("name")}
          placeholder="name"
          title="Name"
          message={errors?.name?.message}
          variant={errors?.name && "danger"}
        />
        <Input
          type="text"
          {...register("email")}
          placeholder="email"
          title="Email"
          message={errors?.email?.message}
          variant={errors?.email && "danger"}
        />
        <PasswordInput
          type="password"
          placeholder="password"
          title="Password"
          {...register("password")}
          message={errors?.password?.message}
          variant={errors?.password && "danger"}
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
        <Spacer />
      </form>
    </div>
  );
}
