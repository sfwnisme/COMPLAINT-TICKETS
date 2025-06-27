import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type Params<T> = {
  endpoint: string, id: string | undefined
  , initialData?: T
}

export default function useGetSingleApiData<T>({ endpoint = '', id = '', initialData }: Params<T>) {
  const query = useQuery<T, Error>({
    queryKey: [endpoint, id],
    queryFn: async () => {
      const res = await axiosInstance.get(endpoint + '/' + id)
      return res.data.data
    },
    enabled: !!id,
    initialData: initialData,
  })

  return query
}