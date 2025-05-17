import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { IUser } from '../types'

export default function useGetSingleUser(userId: string = "") {
  return useGetSingleApiData<IUser>({ endpoint: '/users', id: userId })
}
