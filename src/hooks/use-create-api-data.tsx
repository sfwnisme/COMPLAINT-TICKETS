import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

export default function useCreateApiData<T>(endpoint: string) {
  const mutation = useMutation({
    mutationKey: ['create-', endpoint],
    mutationFn: async (data: T) => {
      const res = await axiosInstance.post(endpoint, data)
      return res
    },
  })

  return mutation
}
