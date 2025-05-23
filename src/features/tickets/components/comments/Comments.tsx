import Comment from '../comment/Comment'
import useGetArrayByIdApiData from '../../../../hooks/use-get-api-data-by-query'
import Alert from '../../../../components/alert/Alert'
import Style from './Comments.module.css'
import { IComment } from '../../../../types/types'
import CommentSkeleton from '../comment/CommentSkeleton'

type Props = {
  ticketId: string
}

export default function Comments({ ticketId }: Props) {
  const { data: comments, isLoading } = useGetArrayByIdApiData<IComment[]>({ endpoint: '/comments', query: `?ticketId=${ticketId}` })
  console.log('comments', comments)
  if (comments?.length === 0) return
  if (isLoading) return <CommentSkeleton />

  const renderCommentsList = comments?.map((comment: IComment) => {
    return (
      <Comment
        key={comment._id}
        comment={comment}
      />
    )
  })

  return (
    <div className={`${Style["float-ticket__comments"]}`}>
      {comments?.length !== 0 ? renderCommentsList :
        <Alert visible variant='info'>No comments Yet</Alert>
      }
    </div>
  )
}