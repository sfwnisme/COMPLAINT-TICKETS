import { useParams } from 'react-router-dom'
import UpdateUserForm from '../../../../features/forms/users/update-user-form/UpdateUserForm'

export default function UpdateUser() {
  const { userId } = useParams()
  console.log(userId)
  return (
    <div>
      <UpdateUserForm />
    </div>
  )
}