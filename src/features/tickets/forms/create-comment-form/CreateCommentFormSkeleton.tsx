import Style from './CreateCommentForm.module.css'
import Skeleton from '../../../../components/skeleton/Skeleton'


export default function CreateCommentFormSkeleton() {
  return (
    <form className={`${Style['ticket-page__add-comment']}`} >
      <Skeleton height='30px'/>
      <Skeleton width='120px' height='30px' />
    </form>
  )
}