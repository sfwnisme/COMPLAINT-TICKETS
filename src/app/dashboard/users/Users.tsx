import { useMemo } from "react"
import Dialog from "../../../components/dialog/Dialog"
import PageHeader from "../../../components/pageHeader/PageHeader"
import ErrorUsersTable from "../../../features/users/components/tables/errorUsersTable/ErrorUsersTable"
import LoadingUsersTable from "../../../features/users/components/tables/loadingUsersTable/LoadingUsersTable"
import RenderUsersTable from "../../../features/users/components/tables/renderUsersTable/RenderUsersTable"
import UsersTable from "../../../features/users/components/tables/usersTable/UsersTable"
import useDeleteUser from "../../../features/users/hooks/use-delete-user"
import useGetUsers from "../../../features/users/hooks/use-get-users"
import useGetCurrentUser from "../../../hooks/useGetCurrentUser"
import { useUsersStore } from "../../../store/users.store"

export default function Users() {
  const isDialogVisible = useUsersStore((state) => state.isDialogVisible)
  const toggleDialog = useUsersStore((state) => state.toggleDialog)

  const users = useGetUsers()
  const currentUser = useGetCurrentUser()

  const { onDeleteUser, isPending: isDeleting } = useDeleteUser()

  const content = useMemo(() => {
    if (users.isLoading) return <LoadingUsersTable />
    if (users.isError) return <ErrorUsersTable error={users.error} />
    if (users.isSuccess) {
      return users.data.map((user) => (
        <RenderUsersTable
          key={user?._id}
          user={user}
          currentUser={currentUser?.data}
        />
      ))
    }
  }, [users, currentUser?.data])

  return (
    <div>
      <PageHeader title="Users" button="Create user" href="create" />
      <UsersTable>
        {content}
        <Dialog
          header='Delete user'
          description='Are you sure, you wanna delete user'
          CTA_L="Cancel"
          CTA_R="Delete"
          isVisible={isDialogVisible}
          setIsVisible={toggleDialog}
          action={onDeleteUser}
          isLoading={isDeleting}
        />
      </UsersTable>
    </div>
  )
}
