import Style from './Comment.module.css'
import Skeleton from "../../../../components/skeleton/Skeleton";
import Spacer from '../../../../components/spacer/Spacer';

export default function CommentSkeleton() {

  return (
    <div className={`${Style["ticket-page__comment"]}`}>
      <div className={`${Style['ticket-page__commenter']}`}>
        <Skeleton width='40px' height='40px' label="avatar" />
        <div className={Style['ticket-page__commenter-info']}>
          <div style={{ display: "flex", gap: '4px' }}>
            <Skeleton width='30%' label='first name' />
            <Skeleton width='30%' label='last name' />
          </div>
          <Spacer />
          <Skeleton height='12px' width='40%' label='date' />
        </div>
        <Skeleton width="30px" height="30px" label='comment options' />
      </div>
      <Skeleton width='90%' height='17px' label='comment content1' />
      <Spacer />
      <Skeleton width='96%' height='17px' label='comment content2' />
      <Spacer />
      <Skeleton height='13px' width='60%' label='comment mark as a solution alert' />
    </div>
  )
}