import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Params = {
  endpoint: string, id: string | undefined
}

export default function useGetSingleApiData({ endpoint = '', id = '' }: Params) {
  const query = useQuery({
    queryKey: ['single-', endpoint],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint + '/' + id)
      return res
    },
    select: (res) => {
      console.log('onSuccess single api data', res)
      return res.data.data
    }
  })

  console.log(query)

  return query
}