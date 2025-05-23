import { createUserSchema } from '../schemas/user.schema';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof createUserSchema>;
export default function useCreateUserFormValidation() {
  const formValidation = useForm<Inputs>({
    resolver: zodResolver(createUserSchema),
    mode: "all",
  });
  return formValidation
}
