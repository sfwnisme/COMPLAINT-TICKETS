import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'
import { AxiosError } from 'axios'

export default function useGetAllData<T>(endpoint: string) {
  const query = useQuery<T, AxiosError<{ msg?: string }>>({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint)
      return res.data.data
    }
  })
  return query
}