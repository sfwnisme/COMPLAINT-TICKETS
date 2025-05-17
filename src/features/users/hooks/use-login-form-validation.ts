import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '../schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'

type Inputs = z.infer<typeof loginSchema>
export default function useLoginFormValidation() {

  const form = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
    mode: 'all'
  })
  return form
}
