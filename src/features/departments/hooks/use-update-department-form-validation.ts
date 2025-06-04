import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetDepartment from './use-get-department';
import { updateDepartmentSchema, UpdateDepartmentSchemaType } from '../schemas/department.schema';

export default function useUpdateDepartmentFormValidation(departmentId: string = '') {
  const { data: department, isFetched } = useGetDepartment(departmentId)
  const form = useForm<UpdateDepartmentSchemaType>({
    resolver: zodResolver(updateDepartmentSchema),
    mode: 'all',
    values: {
      title: department?.title ?? 'loading...'
    },
  });
  if (isFetched) {
    form.setFocus('title')
  }
  return form
}