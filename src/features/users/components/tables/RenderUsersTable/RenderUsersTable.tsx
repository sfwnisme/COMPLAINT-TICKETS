import { useMemo } from "react"
import useGetUsers from "../../../hooks/use-get-users"
import RenderUsersTableRows from "../renderUsersTableRows/RenderUsersTableRows"
import LoadingUsersTable from "../loadingUsersTable/LoadingUsersTable"
import ErrorUsersTable from "../errorUsersTable/ErrorUsersTable"

export default function RenderUsersTable() {
  const users = useGetUsers()

  const content = useMemo(() => {
    if (users.isLoading) return <LoadingUsersTable />
    if (users.isError) return <ErrorUsersTable error={users.error} />
    if (users.isSuccess) return <RenderUsersTableRows users={users?.data} />
  }, [users?.data, users.isLoading, users.isSuccess, users.isError, users?.error])
  return content
}
