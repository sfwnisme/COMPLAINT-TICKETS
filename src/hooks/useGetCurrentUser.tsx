import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

export default function useGetCurrentUser() {
  const currentUser = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await axiosInstance.get('/users/me')
      return res
    },
    select: (response) => {
      return response.data.data
    },
    retry: 2,
  })
  return currentUser
}