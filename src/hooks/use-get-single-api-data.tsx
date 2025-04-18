import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function useGetSingleApiData(endpoint: string) {
  const query = useQuery({
    queryKey: ['single-api-data', endpoint],
    queryFn: async () => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('TOKEN')}`
      const BASE_URL = import.meta.env.VITE_BASE_URL + endpoint
      const res = await axios.get(BASE_URL)
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