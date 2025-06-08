import  { useMemo } from 'react'
import useGetTags from '../../hooks/use-get-tags'
import LoadingTags from '../loadingTags/LoadingTags'
import RenderTags from '../renderTags/RenderTags'
import ErrorTags from '../errorTags/ErrorTags'
import NoTags from '../noTags/NoTags'

export default function RenderTagsContent() {
  const tags = useGetTags()
  const content = useMemo(() => {
    if (tags.isLoading) return <LoadingTags />
    if (tags.isError) return <ErrorTags error={tags.error.response?.data.msg ?? ''} />
    if (tags.data?.length === 0) return <NoTags />
    if (tags.isSuccess) return <RenderTags tags={tags?.data} />
  }, [
    tags.data,
    tags.isLoading,
    tags.isSuccess,
    tags.isError,
    tags.error
  ])

  return content
}
