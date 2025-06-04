import useGetAllData from '../../../hooks/use-get-all-data'
import { IDepartment } from '../../../types/types'

export default function useGetDepartments() {
  return useGetAllData<IDepartment[]>('/departments')
}
