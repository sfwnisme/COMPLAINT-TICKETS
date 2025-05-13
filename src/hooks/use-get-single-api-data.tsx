import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'
import { AxiosResponse } from 'axios'

type Params = {
  endpoint: string, id: string | undefined
}
// declare function 
// useQuery
// <TQueryFnData = unknown,
//  TError = DefaultError,
//  TData = TQueryFnData,
//  TQueryKey extends QueryKey = QueryKey>
// (options: UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient): UseQueryResult<TData, TError>;

export default function useGetSingleApiData<T>({ endpoint = '', id = '' }: Params) {
  const query = useQuery<T, Error>({
    queryKey: ['single-', endpoint, id],
    queryFn: async (): Promise<T> => {
      const res: AxiosResponse<{ data: T }> = await axiosInstance.get(endpoint + '/' + id)
      return res.data.data
    },
    enabled: !!id,
    // select: (res) => {
    //   console.log('onSuccess single api data', res)
    //   return res.data.data
    // }
  })

  console.log('single query', query)

  return query
}