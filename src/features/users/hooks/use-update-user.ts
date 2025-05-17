import { updateUserSchema } from '../schemas/user.schema';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';
import useUpdateApiData from '../../../hooks/use-update-api-data';
import axios from 'axios';
import { useCallback } from 'react';

type Inputs = z.infer<typeof updateUserSchema>

export default function useUpdateUser(userId: string = "") {
  const { mutateAsync, isPending, isSuccess, isError, error } = useUpdateApiData<Inputs>({ endpoint: '/users', revalidateKey: '/users', id: String(userId), method: 'patch' })
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data);
      return res;
    } catch (error) {
      console.error("update user error", error);
    }
  }, [mutateAsync]);

  let typedError
  if (axios.isAxiosError(error)) {
    typedError = error
  }
  const successMessage = 'user updated successfully'
  const errorMessage = typedError?.response?.data?.msg

  return { onSubmit: onSubmit, isPending, isSuccess, isError, successMessage, errorMessage }
}
