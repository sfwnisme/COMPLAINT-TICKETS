import UsersTable from "../../../features/users/components/tables/usersTable/UsersTable"
import PageHeader from "../../../components/pageHeader/PageHeader"
import DeleteUserDialog from "../../../features/users/components/deleteUserDialog/DeleteUserDialog"
import RenderUsersTable from "../../../features/users/components/tables/RenderUsersTable/RenderUsersTable"
import { memo } from "react"
import Can from "../../../components/can/Can"

const Users = () => {
  return (
    <div>
      <Can permission="canCreate" route="user" fallback={<PageHeader title="Users" />}>
        <PageHeader title="Users" button="Create user" href="create" />
      </Can>
      <UsersTable>
        <RenderUsersTable />
        <DeleteUserDialog />
      </UsersTable>
    </div>
  )
}

export default memo(Users)
