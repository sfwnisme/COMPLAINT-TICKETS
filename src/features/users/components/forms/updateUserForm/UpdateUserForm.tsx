import { useParams } from "react-router-dom"
import { updateUserSchema } from "../../../schemas/user.schema"
import { z } from "zod"
import Alert from '../../../../../components/alert/Alert'
import Button from '../../../../../components/button/Button'
import Loader from '../../../../../components/loaders/loader/Loader'
import FormLayout from '../../../../../components/formLayout/FormLayout'
import InputsArray from '../../../../../components/inputsArray/InputsArray'
import SelectRole from '../selectRole/SelectRole'
import useUpdateUser from "../../../hooks/use-update-user"
import useUpdateUserFormValidation from "../../../hooks/use-update-user-form-validation"
import { getupdateUserInputsConfigs } from "../../../inputsConfig"


type Inputs = z.infer<typeof updateUserSchema>
export default function UpdateUserForm() {
  const { userId } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useUpdateUserFormValidation(userId)

  const inputs = getupdateUserInputsConfigs(errors)
  const {
    onSubmit,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    successMessage
  } = useUpdateUser(userId)

  const showAlert = isSuccess || isError
  const canUpdate = !isPending && isValid

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title='Update user' subtitle='apply the changes for the user'>
      <InputsArray<Inputs> inputs={inputs} register={register} />
      <SelectRole title='Select role' {...register('role')} />
      <Button width="fill" disabled={!canUpdate}>{isPending ? <Loader /> : "Update"}</Button>
      <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon>
        {errorMessage ?? successMessage}
      </Alert>
    </FormLayout>
  );
}
