import { useForm } from 'react-hook-form';
import { updateUserSchema } from '../schemas/user.schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetSingleUser from './use-get-single-user';

type Inputs = z.infer<typeof updateUserSchema>

export default function useUpdateUserFormValidation(userId: string = '') {
  const { data: user } = useGetSingleUser(userId)
  const form = useForm<Inputs>({
    resolver: zodResolver(updateUserSchema),
    mode: 'all',
    values: {
      name: user?.name ?? '',
      email: user?.email ?? '',
      role: user?.role ?? 'view_only'
    },
  });
  return form
}