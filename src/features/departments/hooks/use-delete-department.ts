import useDeleteApiData from '../../../hooks/use-delete-api-data'

export default function useDeleteDepartment() {
  return useDeleteApiData({endpoint: '/departments', revalidateKey: ['/departments']})
}