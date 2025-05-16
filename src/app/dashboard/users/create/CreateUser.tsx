import PageHeader from "../../../../components/pageHeader/PageHeader.tsx";
import CreateUserForm from "../../../../features/users/components/forms/createUserForm/CreateUserForm.tsx";

export default function CreateUser() {

  return (
    <div>
      <PageHeader title="Create user" button="Users" href="/dashboard/users" />
      <CreateUserForm />
    </div>
  )
}