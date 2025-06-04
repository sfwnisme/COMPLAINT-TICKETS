import { useCallback } from 'react'
import useUpdateApiData from '../../../hooks/use-update-api-data'
import { SubmitHandler } from 'react-hook-form'
import { UpdateDepartmentSchemaType } from '../schemas/department.schema'
import axios from 'axios'


export default function useUpdateDepartment(departmentId: string = '') {
  const { mutateAsync, isPending, isSuccess, isError, error } = useUpdateApiData({ endpoint: '/departments', revalidateKey: "/departments", id: departmentId, method: 'patch' })
  const onSubmit: SubmitHandler<UpdateDepartmentSchemaType> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data)
      return res
    } catch (error) {
      console.error('update department', error)
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