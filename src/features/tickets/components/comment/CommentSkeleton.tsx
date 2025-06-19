import Style from './Comment.module.css'
import Skeleton from "../../../../components/skeleton/Skeleton";
import Spacer from '../../../../components/spacer/Spacer';
import UserChipSkeleton from '../../../../components/userChip/UserChipSkeleton';

export default function CommentSkeleton() {

  return (
    <div className={`${Style["comment"]}`}>
      <div className={`${Style['comment__author']}`}>
        <UserChipSkeleton />
      </div>
      <Skeleton width='90%' height='17px' label='comment content1' />
      <Spacer />
      <Skeleton width='96%' height='17px' label='comment content2' />
      <Spacer />
      <Skeleton height='13px' width='60%' label='comment mark as a solution alert' />
    </div>
  )
}