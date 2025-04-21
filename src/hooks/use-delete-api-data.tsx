import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosInstance } from '../libs/axios-instance'

type useDeleteApiDataParams = { endpoint: string, revalidateKey?: string }

export default function useDeleteApiData({ endpoint = "", revalidateKey = "" }: useDeleteApiDataParams) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationKey: ['delete-', endpoint],
    mutationFn: async (id: string) => {
      const res = await axiosInstance.delete(`${endpoint}/${id}`)
      return res
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [revalidateKey] })
      return res
    },
  })
  return mutation
}