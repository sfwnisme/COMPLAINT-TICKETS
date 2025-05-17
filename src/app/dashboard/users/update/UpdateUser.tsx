import PageHeader from "../../../../components/pageHeader/PageHeader";
import UpdateUserForm from "../../../../features/users/components/forms/updateUserForm/UpdateUserForm";

export default function updateUser() {
  return (
    <div>
      <PageHeader title="Update user" button="Users" href="/dashboard/users" />
      <UpdateUserForm />
    </div>
  )
}