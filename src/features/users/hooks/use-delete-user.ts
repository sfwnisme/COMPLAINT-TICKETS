import useDeleteApiData from '../../../hooks/use-delete-api-data'

export default function useDeleteUser() {
  return useDeleteApiData({ endpoint: "/users", revalidateKey: "/users" })
}