import { useMutation } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

export default function useUpdateApiData<T /** the data types */>(endpoint: string, method: 'put' | 'patch' = 'patch') {
  const mutation = useMutation({
    mutationKey: ['update-api-data', endpoint],
    mutationFn: async (data: T) => {
      if (method === 'patch') {
        const res = await axiosInstance.patch(endpoint, data)
        return res
      }
      if (method === 'put') {
        const res = await axiosInstance.put(endpoint, data)
        return res
      }
    },
  })

  return mutation
}