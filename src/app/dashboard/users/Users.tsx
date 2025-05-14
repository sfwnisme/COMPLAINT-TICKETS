import Dialog from "../../../components/diaglog/Dialog"
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
  const userId = useUsersStore((state) => state.userId)
  const setUserId = useUsersStore((state) => state.setUserId)
  const isDialogVisible = useUsersStore((state) => state.isDialogVisible)
  const toggleDialog = useUsersStore((state) => state.toggleDialog)

  const users = useGetUsers()
  const currentUser = useGetCurrentUser()

  const { mutateAsync, isPending: isDeleting } = useDeleteUser()
  const onDeleteUser = async () => {
    await mutateAsync(userId)
    setUserId('')
  }

  // DOM
  let content
  if (users.isLoading) content = <LoadingUsersTable />
  if (users.isError) content = <ErrorUsersTable error={users.error} />
  if (users.isSuccess) {
    content = users.data.map((user) => (
      <RenderUsersTable
        key={user?._id}
        user={user}
        currentUser={currentUser?.data}
      />
    ))
  }

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
