import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Params = {
  endpoint: string,
  relatedField: string,
  fieldId: string | undefined
}

export default function useGetArrayByIdApiData<T>({ endpoint = '', relatedField = '', fieldId = '' }: Params) {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const query = `?${relatedField}=${fieldId}`
      const res = await axiosInstance.get(endpoint + query)
      return res
    },
    select: (res) => {
      console.log('onSuccess single api data', res)
      return res.data.data as T
    }
  })

  console.log(query)

  return query
}