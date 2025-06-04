import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form'
import { loginSchema } from '../schemas/login.schema'
import Cookies from 'js-cookie'
import { z } from 'zod'
import axios from 'axios'

type Inputs = z.infer<typeof loginSchema>

export default function useLogin() {
  const { mutateAsync, isPending, isError, isSuccess, error, data } = useCreateApiData({
    endpoint: '/users/login',
    revalidateKey: ['/users/login'],
  })
  Cookies.set('TOKEN', data?.data.data.token)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const logedIn = await mutateAsync(data)
      console.log('loged in successfully', logedIn)
      window.location.pathname = '/dashboard'
      return logedIn
    } catch (error) {
      console.log('login error', error)
    }
  }

  let typedError;
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  const errorMessage = typedError?.response?.data?.msg ?? typedError?.message
  const successMessage = 'you logged in successfully'

  return {
    onSubmit,
    isPending,
    isError,
    isSuccess,
    successMessage,
    errorMessage
  }
}
