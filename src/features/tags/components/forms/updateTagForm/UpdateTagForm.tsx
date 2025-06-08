import Input from '../../../../../components/input/Input'
// import useUpdateTagFormValidation from '../../../hooks/use-update-tag-form-validation'
import Button from '../../../../../components/button/Button'
// import useUpdateTag from '../../../hooks/use-update-tag'
import LoadingIcon from '../../../../../components/loadingIcon/LoadingIcon'
import useUpdateTagFormValidation from '../../../hooks/use-update-tag-form-validation'
import useUpdateTag from '../../../hooks/use-update-tag'

type Props = {
  tagId: string,
  setIsUpdating: React.Dispatch<React.SetStateAction<[boolean, string]>>
}

export default function UpdateTagForm({ tagId, setIsUpdating }: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useUpdateTagFormValidation(tagId)
  const { onSubmit, isPending, isSuccess, errorMessage } = useUpdateTag(tagId)
  const canUpdate = !isPending && isValid

  if (isSuccess) {
    setIsUpdating([false, ''])
  }
  return (
    <div style={{ display: "flex", gap: '3px', alignItems: 'start' }}>
      <form id='my_form' onSubmit={handleSubmit(onSubmit)} />
      <Input type='text' {...register('name',)} form='my_form' message={errors?.name?.message ?? errorMessage} variant={errors?.name?.message || errorMessage ? 'danger' : 'primary'} disabled={isPending} />
      <Button type='submit' size='xl' form='my_form' disabled={!canUpdate}>
        {isPending && <LoadingIcon />}
        Update
      </Button>
    </div>
  )
}