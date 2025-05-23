import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Params = {
  endpoint: string,
  query: string,
}

export default function useGetApiDataByQuery<T>({ endpoint = '', query = '' }: Params) {
  const queryRequest = useQuery<T, Error>({
    queryKey: [endpoint, query],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint + query)
      return res.data.data
    },
  })
  return queryRequest
}