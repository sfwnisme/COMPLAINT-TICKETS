import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function useCreateApiData<T /** the data types */>(endpoint: string) {
  const mutation = useMutation({
    mutationKey: ['create-api-data', endpoint],
    mutationFn: async (data: T) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('TOKEN')}`
      const BASE_URL = import.meta.env.VITE_BASE_URL + endpoint
      const res = await axios.patch(BASE_URL, data)
      return res
    },
  })

  return mutation
}