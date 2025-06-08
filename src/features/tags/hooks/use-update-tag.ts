import { useCallback } from 'react'
import useUpdateApiData from '../../../hooks/use-update-api-data'
import { SubmitHandler } from 'react-hook-form'
import { UpdateTagSchemaType } from '../schemas/tag.schema'
import axios from 'axios'


export default function useUpdateTag(tagId: string = '') {
  const { mutateAsync, isPending, isSuccess, isError, error } = useUpdateApiData({ endpoint: '/tags', revalidateKey: "/tags", id: tagId, method: 'patch' })
  const onSubmit: SubmitHandler<UpdateTagSchemaType> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data)
      return res
    } catch (error) {
      console.error('update tag', error)
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

  return { onSubmit: onSubmit, isPending, isSuccess, isError, successMessage, errorMessage }
}