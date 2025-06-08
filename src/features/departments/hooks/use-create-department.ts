import React, { useCallback } from 'react'
import useCreateApiData from '../../../hooks/use-create-api-data'
import { CreateDepartmentSchemaType } from '../schemas/department.schema'
import axios from 'axios'
import { SubmitHandler } from 'react-hook-form'

export default function useCreateDepartment() {
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateApiData({ endpoint: '/departments/create', revalidateKey: [['/departments']] })

  const onSubmit: SubmitHandler<CreateDepartmentSchemaType> = useCallback(async (data) => {
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
