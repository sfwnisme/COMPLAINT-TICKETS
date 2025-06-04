import Input from '../../../../../components/input/Input'
import useUpdateDepartmentFormValidation from '../../../hooks/use-update-department-form-validation'
import Button from '../../../../../components/button/Button'
import useUpdateDepartment from '../../../hooks/use-update-department'
import LoadingIcon from '../../../../../components/loadingIcon/LoadingIcon'

type Props = {
  departmentId: string,
  setIsUpdating: React.Dispatch<React.SetStateAction<[boolean, string]>>
}

export default function UpdateDepartmentForm({ departmentId, setIsUpdating }: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useUpdateDepartmentFormValidation(departmentId)
  const { onSubmit, isPending, isSuccess, errorMessage } = useUpdateDepartment(departmentId)
  const canUpdate = !isPending && isValid

  if (isSuccess) {
    setIsUpdating([false, ''])
  }
  return (
    <div style={{ display: "flex", gap: '3px', alignItems: 'start' }}>
      <form id='my_form' onSubmit={handleSubmit(onSubmit)} />
      <Input type='text' {...register('title',)} form='my_form' message={errors?.title?.message ?? errorMessage} variant={errors?.title?.message || errorMessage ? 'danger' : 'primary'} disabled={isPending} />
      <Button type='submit' size='xl' form='my_form' disabled={!canUpdate}>
        {isPending && <LoadingIcon />}
        Update
      </Button>
    </div>
  )
}