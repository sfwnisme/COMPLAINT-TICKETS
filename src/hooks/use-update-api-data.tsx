import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function useUpdateApiData<T /** the data types */>(endpoint: string, method: 'put' | 'patch' = 'patch') {
  const mutation = useMutation({
    mutationKey: ['update-api-data', endpoint],
    mutationFn: async (data: T) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('TOKEN')}`
      const BASE_URL = import.meta.env.VITE_BASE_URL + endpoint
      if (method === 'patch') {
        const res = await axios.patch(BASE_URL, data)
        return res
      }
      if (method === 'put') {
        const res = await axios.put(BASE_URL, data)
        return res
      }
    },
  })

  return mutation
}