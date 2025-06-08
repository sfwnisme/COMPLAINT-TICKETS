import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { ITag } from '../../../types/types'

export default function useGetTag(tagId: string) {
 return useGetSingleApiData<ITag>({endpoint: '/tags', id:tagId})
}