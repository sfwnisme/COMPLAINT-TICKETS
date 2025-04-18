import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

type useDeleteApiDataParams = { endpoint: string, revalidateKey?: string }

export default function useDeleteApiData({ endpoint = "", revalidateKey = "" }: useDeleteApiDataParams) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ['delete-api-data', endpoint],
    mutationFn: async (id: string) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('TOKEN')}`
      const BASE_URL = import.meta.env.VITE_BASE_URL + endpoint
      const res = await axios.delete(`${BASE_URL}/${id}`)
      return res
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [revalidateKey] })
      console.log('onSuccess delete api data', res)
      return res
    },
  })

  return mutation
}