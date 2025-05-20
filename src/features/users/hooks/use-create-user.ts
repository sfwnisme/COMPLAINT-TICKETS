import axios from 'axios';
import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form';
import { createUserSchema } from '../schemas/user.schema';
import { z } from 'zod';
import { useCallback } from 'react';
import { IUser } from '../../../types/types';

type Inputs = z.infer<typeof createUserSchema>;

export default function useCreateUser() {
  const { mutateAsync, isPending, isSuccess, isError, error } = useCreateApiData<Omit<IUser, '_id'>>({ endpoint: "/users/register", revalidateKey: "/create" })

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data);
      return res;
    } catch (error) {
      console.error("create user error", error);
    }
  }, [mutateAsync])

  let typedError;
  if (axios.isAxiosError(error)) {
    typedError = error;
  }
  const errorMessage = typedError?.response?.data?.msg
  const successMessage = 'The user created successfull, you can now log in to activeate the account';

  return { onSubmit, isPending, isSuccess, isError, errorMessage, successMessage }
}