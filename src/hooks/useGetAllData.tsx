import { useQuery } from '@tanstack/react-query'
import { getAllData } from '../store/users'


export default function useGetAllData(endpoint: string) {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async () => await getAllData(endpoint),
    select: (response) => {
      return response.data.data
    },
    // retry: false,
  })
  console.log('query from get all data', query)
  return query
}