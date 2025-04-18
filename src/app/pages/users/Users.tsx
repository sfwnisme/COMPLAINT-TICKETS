import { AxiosError } from "axios"
import Title from "../../../components/title/Title"
import S from './Users.module.css'
import Table from "../../../components/table/Table"
import THead from "../../../components/table/THead"
import TR from "../../../components/table/TR"
import TD from "../../../components/table/TD"
import TBody from "../../../components/table/TBody"
import Badge from "../../../components/badge/Badge"
import TH from "../../../components/table/TH"
import { IUser } from '../../../types/types'
import { TVariants } from "../../../components/defintions.components"
import Dropdown from "../../../components/dropdown/Dropdown"
import List from "../../../components/list/List"
import ListItem from "../../../components/list/ListItem"
import useGetCurrentUser from "../../../hooks/useGetCurrentUser"
import { USER_ROLES, USER_ROLES_COLORS } from "../../../constrains/constrains"
import { Visible } from "@sfwnisme/visi"
import useGetAllData from "../../../hooks/useGetAllData"
import useDeleteApiData from "../../../hooks/use-delete-api-data"
import { useQueryClient } from "@tanstack/react-query"

export default function Users() {

  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['/users'] })

  const getAllData = useGetAllData('/users')
  const currentUser = useGetCurrentUser()
  const { mutate, isPending: isDeleting } = useDeleteApiData('/users')

  const onDeleteUser = (id: string) => {
    mutate(id)
    // getAllData.refetch()
  }

  const renderLoading = (
    <TR>
      <TD colSpan={12} align="center" >
        loading...
      </TD>
    </TR>
  )
  const renderEmpty = (
    <TR>
      <TD colSpan={12} align="center" >
        No users!
      </TD>
    </TR>
  )

  const renderError = (
    <TR>
      <TD colSpan={12} align="center" >
        Ops..., there is an error:
        {(getAllData.error as AxiosError<{ msg?: string }>)?.response?.data.msg}
      </TD>
    </TR>
  )

  const renderData = getAllData?.data?.map((user: IUser, idx: number) => (
    <TR key={user._id}>
      <TD>{idx + 1}</TD>
      <TD>
        {user.name}
      </TD>
      <TD>{user.email}</TD>
      <TD><Badge variant={USER_ROLES_COLORS[user?.role] as TVariants} title={user.role} text={user.role} /></TD>
      <TD>
        <Visible when={currentUser.data?._id !== user?._id}>
          <Dropdown>
            <List position="absolute" rightOrLeft="right">
              <ListItem href={`${user._id}`}>
                View
              </ListItem>
              <Visible when={currentUser.data.role === USER_ROLES.ADMIN}>
                <ListItem href={`update/${user._id}`}>Edit</ListItem>
                <ListItem onClick={() => onDeleteUser(user._id)}>
                  {
                    isDeleting ?
                      'Deleting...'
                      : 'Delete'
                  }

                </ListItem>
              </Visible>
            </List>
          </Dropdown>
        </Visible>
      </TD>
    </TR >
  ))

  let renderUsers;
  if (getAllData?.data?.length === 0) {
    renderUsers = renderEmpty
  }
  if (getAllData.isLoading) {
    renderUsers = renderLoading
  }
  if (getAllData.isError) {
    renderUsers = renderError
  }
  if (getAllData.isSuccess) {
    renderUsers = renderData
  }


  return (
    <div>
      <Title text='Users' />
      <div className={S.users}>

        <Table>
          <THead>
            <TR>
              <TH>No</TH>
              <TH>Name</TH>
              <TH>Email</TH>
              <TH>Role</TH>
              <TH>Action</TH>
            </TR>
          </THead>
          <TBody>

            {renderUsers}
          </TBody>
        </Table>
      </div>
    </div>
  )
}
