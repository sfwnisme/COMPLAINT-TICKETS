import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createCommentSchema } from '../../../validation/ticket.validation'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = z.infer<typeof createCommentSchema>
export default function useCreateCommentForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(createCommentSchema),
    mode: 'all'
  })
  return form
}
