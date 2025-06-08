import  { useMemo } from 'react'
import useGetDepartments from '../../hooks/use-get-departments'
import LoadingDepartments from '../loadingDepartments/LoadingDepartments'
import RenderDepartments from '../renderDepartments/RenderDepartments'
import ErrorDepartments from '../errorDepartments/ErrorDepartments'
import NoDepartments from '../noDepartments/NoDepartments'

export default function RenderDepartmentsContent() {
  const departments = useGetDepartments()
  const content = useMemo(() => {
    if (departments.isLoading) return <LoadingDepartments />
    if (departments.isError) return <ErrorDepartments error={departments.error.response?.data.msg ?? ''} />
    if (departments.data?.length === 0) return <NoDepartments />
    if (departments.isSuccess) return <RenderDepartments departments={departments?.data} />
  }, [
    departments.data,
    departments.isLoading,
    departments.isSuccess,
    departments.isError,
    departments.error
  ])

  return content
}
