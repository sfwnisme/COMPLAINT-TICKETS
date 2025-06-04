import { useQueryClient, useMutation } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Props = {
  endpoint: string,
  revalidateKey?: (string | (string | number | object)[])[]
}

export default function useCreateApiData<T>({ endpoint = "", revalidateKey = [] }: Readonly<Props>) {
  console.log('revalidatKey', revalidateKey)
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: [endpoint],
    mutationFn: async (data: T) => {
      const res = await axiosInstance.post(endpoint, data)
      return res
    },
    onSuccess: () => {
      if (Array.isArray(revalidateKey)) {
        revalidateKey.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key as string[] })
        })
      } else {
        queryClient.invalidateQueries({ queryKey: revalidateKey })
      }
    }
  })

  return mutation
}
