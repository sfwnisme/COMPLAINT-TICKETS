import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTagSchema, CreateTagSchemaType } from '../schemas/tag.schema'

export default function useCreateTagFormValidation() {
  const form =  useForm<CreateTagSchemaType>({
    mode: 'all',
    resolver: zodResolver(createTagSchema)
  })
  form.setFocus('name')
  return form
}
