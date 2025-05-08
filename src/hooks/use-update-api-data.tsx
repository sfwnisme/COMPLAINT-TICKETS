import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

// export default function useUpdateApiData<T /** the data types */>(endpoint: string, method: 'put' | 'patch' = 'patch') {
type Props = {
  endpoint: string,
  revalidateKey: string,
  id: string,
  method: 'put' | 'patch'
}
export default function useUpdateApiData<T>({
  endpoint = '',
  revalidateKey = "",
  id = "",
  method = 'patch'
}: Props) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: [`${endpoint}/${id}`],
    mutationFn: async (data: T) => {
      if (method === 'patch') {
        const res = await axiosInstance.patch(`${endpoint}/${id}`, data)
        return res
      }
      if (method === 'put') {
        const res = await axiosInstance.put(endpoint, data)
        return res
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [revalidateKey] })
    }
  })

  return mutation
}