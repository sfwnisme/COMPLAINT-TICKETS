import useDeleteApiData from '../../../hooks/use-delete-api-data'

export default function useDeleteTag() {
  return useDeleteApiData({endpoint: '/tags', revalidateKey: ['/tags']})
}