import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { IDepartment } from '../../../types/types'

export default function useGetDepartment(departmentId: string) {
 return useGetSingleApiData<IDepartment>({endpoint: '/departments', id:departmentId})
}