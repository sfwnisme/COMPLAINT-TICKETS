import { IUser } from '../../../types'
import UserTableRow from '../userTableRow/UserTableRow'
import useGetCurrentUser from '../../../../../hooks/useGetCurrentUser'
import { memo } from 'react'

type Props = {
  users: IUser[]
}

const RenderUsersTableRows = ({ users }: Props) => {
  const currentUser = useGetCurrentUser()
  console.log('currentuseruserusueru', currentUser)
  return users?.map((user) => <UserTableRow user={user} currentUser={currentUser?.data} key={user?._id} />)
}

export default memo(RenderUsersTableRows)