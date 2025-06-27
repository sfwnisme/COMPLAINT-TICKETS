import UserTableRow from '../userTableRow/UserTableRow'
import useGetCurrentUser from '../../../../../hooks/useGetCurrentUser'
import { memo } from 'react'
import { IUser } from '../../../../../types/types'

type Props = {
  users: IUser[]
}

const RenderUsersTableRows = ({ users }: Props) => {
  const currentUser = useGetCurrentUser()
  return users?.map((user) => <UserTableRow user={user} currentUser={currentUser?.data} key={user?._id} />)
}

export default memo(RenderUsersTableRows)