import useGetAllData from '../../../hooks/use-get-all-data'
import { ITag } from '../../../types/types'

export default function useGetTags() {
  return useGetAllData<ITag[]>('/tags')
}
