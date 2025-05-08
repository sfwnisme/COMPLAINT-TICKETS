import { useQueryClient, useMutation } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Props = {
  endpoint: string,
  revalidateKey?: string
}

export default function useCreateApiData<T>({ endpoint = "", revalidateKey = "" }: Readonly<Props>) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: [endpoint],
    mutationFn: async (data: T) => {
      const res = await axiosInstance.post(endpoint, data)
      return res
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [revalidateKey] })
    }
  })

  return mutation
}
