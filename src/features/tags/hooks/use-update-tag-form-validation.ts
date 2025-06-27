import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetTag from './use-get-tag';
import { updateTagSchema, UpdateTagSchemaType } from '../schemas/tag.schema';

export default function useUpdateTagFormValidation(tagId: string = '') {
  const { data: tag, isFetched } = useGetTag(tagId)
  const form = useForm<UpdateTagSchemaType>({
    resolver: zodResolver(updateTagSchema),
    mode: 'all',
    values: {
      name: tag?.name ?? 'loading...'
    },
  });
  if (isFetched) {
    form.setFocus('name')
  }
  return form
}