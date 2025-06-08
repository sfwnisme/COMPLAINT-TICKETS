import React from 'react'
import { useForm } from 'react-hook-form'
import { createDepartmentSchema, CreateDepartmentSchemaType } from '../schemas/department.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function useCreateDepartmentFormValidation() {
  const form =  useForm<CreateDepartmentSchemaType>({
    mode: 'all',
    resolver: zodResolver(createDepartmentSchema)
  })
  form.setFocus('title')
  return form
  
}
