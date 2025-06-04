import axios from 'axios';
import useCreateApiData from '../../../hooks/use-create-api-data'
import { SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import { CreateTicketType } from '../schemas/ticket.schema';

export default function useCreateTicket() {
  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateApiData<CreateTicketType>({ endpoint: "/tickets/create", revalidateKey: ["/create"] })

  const onSubmit: SubmitHandler<CreateTicketType> = useCallback(async (data) => {
    try {
      const res = await mutateAsync(data);
      return res;
    } catch (error) {
      console.error("create ticket error", error);
    }
  }, [mutateAsync])

  let typedError;
  if (axios.isAxiosError(error)) {
    typedError = error;
  }
  const errorMessage = Array.isArray(typedError?.response?.data?.msg)
    ? typedError?.response?.data?.msg.map((m: { path: string, msg: string }) => m.path + ":" + m.msg)
    : typedError?.response?.data?.msg
  const successMessage = 'The ticket created successfull, you can now log in to activeate the account';

  return { onSubmit, isPending, isSuccess, isError, errorMessage, successMessage }
}