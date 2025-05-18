import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Params = {
  endpoint: string,
  query: string,
}

export default function useGetApiDataByQuery<T>({ endpoint = '', query = '' }: Params) {
  const queryRequest = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint + query)
      return res
    },
    select: (res) => {
      console.log('onSuccess single api data', res)
      return res.data.data as T
    }
  })

  console.log(queryRequest)

  return queryRequest
}