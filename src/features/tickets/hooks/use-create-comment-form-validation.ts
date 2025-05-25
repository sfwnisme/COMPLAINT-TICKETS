import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCommentSchema } from '../schemas/ticket.schema'

type Inputs = z.infer<typeof createCommentSchema>
export default function useCreateCommentForm() {
  const form = useForm<Inputs>({
    resolver: zodResolver(createCommentSchema),
    mode: 'all'
  })
  return form
}
