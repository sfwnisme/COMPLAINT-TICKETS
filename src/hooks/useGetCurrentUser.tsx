import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'
import { IUser } from '../types/types'

export default function useGetCurrentUser() {
  const currentUser = useQuery<Omit<IUser, 'createdAt'>, Error>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await axiosInstance.get('/users/me')
      return res.data.data
    },
    retry: false,
  })
  return currentUser
}