import UsersTable from "../../../features/users/components/tables/usersTable/UsersTable"
import PageHeader from "../../../components/pageHeader/PageHeader"
import DeleteUserDialog from "../../../features/users/components/deleteUserDialog/DeleteUserDialog"
import RenderUsersTable from "../../../features/users/components/tables/RenderUsersTable/RenderUsersTable"
import { memo } from "react"

const Users = () => {
  return (
    <div>
      <PageHeader title="Users" button="Create user" href="create" />
      <UsersTable>
        <RenderUsersTable />
        <DeleteUserDialog />
      </UsersTable>
    </div>
  )
}

export default memo(Users)
