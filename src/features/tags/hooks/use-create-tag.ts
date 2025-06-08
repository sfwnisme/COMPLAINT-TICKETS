import { useCallback } from 'react'
import useCreateApiData from '../../../hooks/use-create-api-data'
import { CreateTagSchemaType } from '../schemas/tag.schema'
import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'

export default function useCreateTag() {
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateApiData({ endpoint: '/tags/create', revalidateKey: [['/tags']] })

  const onSubmit: SubmitHandler<CreateTagSchemaType> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data)
      return res
    } catch (error) {
      console.log(error)
    }
  }, [mutateAsync])

  let typedError
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  const errorMessage = Array.isArray(typedError?.response?.data?.msg)
    ? typedError?.response?.data?.msg.map((m: { path: string, msg: string }) => m.path + ":" + m.msg)
    : typedError?.response?.data?.msg
  const successMessage = 'user updated successfully'

  return { onSubmit, isPending, isSuccess, isError, successMessage, errorMessage }
}
