import { z } from "zod";
import { createUserSchema } from "../../../schemas/user.schema.ts";
import Spacer from "../../../../../components/spacer/Spacer.tsx";
import SelectRole from "../selectRole/SelectRole.tsx";
import Alert from "../../../../../components/alert/Alert.tsx";
import Button from "../../../../../components/button/Button.tsx";
import Loader from "../../../../../components/loaders/loader/Loader.tsx";
import FormLayout from "../../../../../components/formLayout/FormLayout.tsx";
import InputsArray from "../../../../../components/inputsArray/InputsArray.tsx";
import useCreateUser from "../../../hooks/use-create-user.ts";
import { getCreateUserInputsConfigs } from "../../../inputsConfigs.ts";
import useCreateUserFormValidation from "../../../hooks/use-create-user-form-validation.ts";

type Inputs = z.infer<typeof createUserSchema>;

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useCreateUserFormValidation()

  const inputsConfigs = getCreateUserInputsConfigs(errors)

  const { onSubmit, isPending, isSuccess, isError, errorMessage, successMessage } = useCreateUser();

  const showAlert = isSuccess || isError
  const canCreate = !isPending && isValid

  return (
    <FormLayout title="User details" subtitle="enter user details to create an account" onSubmit={handleSubmit(onSubmit)}>
      <InputsArray<Inputs> inputs={inputsConfigs} register={register} />
      <SelectRole {...register('role')} title="Role" id='roles' />
      <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon >
        {errorMessage ?? successMessage}
      </Alert>
      <Button width="fill" variant="primary" disabled={!canCreate}>{isPending ? <Loader /> : "Create"}</Button>
      <Spacer />
    </FormLayout>
  );
}
