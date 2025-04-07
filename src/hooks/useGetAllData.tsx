import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function useGetAllData(endpoint: string) {

  const BASE_URL = import.meta.env.VITE_BASE_URL
  const token = `Bearer ${Cookies.get('TOKEN')}`
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      axios.defaults.headers.common['Authorization'] = token
      const res = await axios.get(`${BASE_URL}${endpoint}`)
      return res
    },
    select: (response) => {
      return response.data.data
    },
  })
  console.log('query from get all data', query)
  return query
}