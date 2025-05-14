import useGetAllData from '../../../hooks/useGetAllData'
import { IUser } from '../types'

export default function useGetUsers() {
  return useGetAllData<IUser[]>('/users')
}