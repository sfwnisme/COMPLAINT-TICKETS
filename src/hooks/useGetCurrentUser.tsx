import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import axios from 'axios'

const token = `Bearer ${Cookies.get('TOKEN')}`
const BASE_URL = import.meta.env.VITE_BASE_URL
axios.defaults.baseURL = BASE_URL

export default function useGetCurrentUser() {
  const currentUser = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      axios.defaults.headers.common['Authorization'] = token
      const res = await axios.get('/users/me')
      return res
    },
    select: (response) => {
      return response.data.data
    },
    retry: false,

  })
  return currentUser
}