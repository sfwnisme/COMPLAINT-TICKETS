import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

export default function useGetAllData(endpoint: string) {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint)
      return res
    },
    select: (response) => {
      return response.data.data
    },
  })
  return query
}