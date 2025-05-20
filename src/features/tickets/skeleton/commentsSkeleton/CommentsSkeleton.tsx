import CommentSkeleton from '../comment/CommentSkeleton'

export default function CommentsSkeleton() {
  const arr = [1, 3, 4, 234]
  return arr.map((a) => <CommentSkeleton key={a} />)
}