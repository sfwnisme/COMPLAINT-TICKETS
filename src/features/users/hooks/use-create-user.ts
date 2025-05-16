import useCreateApiData from '../../../hooks/use-create-api-data'
import { IUser } from '../types'

export default function useCreateUser() {
  return useCreateApiData<Omit<IUser, '_id'>>({ endpoint: "/users/register", revalidateKey: "/create" })
}