import useGetAllData from '../../../hooks/use-get-all-data'
import { IUser } from '../types'

export default function useGetUsers() {
  return useGetAllData<IUser[]>('/users')
}