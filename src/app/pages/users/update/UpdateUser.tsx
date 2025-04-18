import { useParams } from 'react-router-dom'
import UpdateUserForm from '../../../../components/forms/update-user-form/UpdateUserForm'

export default function UpdateUser() {
  const { userId } = useParams()
  console.log(userId)
  return (
    <div>
      <UpdateUserForm />
    </div>
  )
}