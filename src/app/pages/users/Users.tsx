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
import Dialog from "../../../components/diaglog/Dialog"
import { useState } from "react"

const UsersData = ({ setDeleteDialogIsVisible, setGetUserId }) => {
  const getAllData = useGetAllData('/users')
  const currentUser = useGetCurrentUser()
  const { mutate, isPending: isDeleting } = useDeleteApiData({
    endpoint: '/users',
    revalidateKey: '/users'
  })

  const onDeleteUser = (id: string) => {
    mutate(id)
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
                <ListItem onClick={() => {
                  setDeleteDialogIsVisible(true)
                  setGetUserId(user._id)
                }}>Delete</ListItem>
                {/* <ListItem onClick={() => onDeleteUser(user._id)}>
                  {
                    isDeleting ?
                      'Deleting...'
                      : 'Delete'
                  }
                </ListItem> */}
              </Visible>
            </List>
          </Dropdown>
        </Visible>
      </TD>
    </TR >
  ))

  if (getAllData.isLoading) return renderLoading
  if (getAllData.isError) return renderError
  if (getAllData.isSuccess) return renderData

  return renderEmpty
}

export default function Users() {
  const [deleteDialogIsVisible, setDeleteDialogIsVisible] = useState<boolean>(false)
  const [getUserId, setGetUserId] = useState<string>("")

  const { mutate, mutateAsync, isPending: isDeleting } = useDeleteApiData({
    endpoint: '/users',
    revalidateKey: '/users'
  })
  console.log(getUserId)

  const onDeleteUser = async () => {
    await mutateAsync(getUserId)
    setGetUserId("")
  }

  return (
    <div>
      <Title text='Users' />
      <Dialog
        header={'Delete user'}
        description={'Are you sure, you wanna delete user'}
        CTA_L="Cancel"
        CTA_R="Delete"
        isVisible={deleteDialogIsVisible}
        setIsVisible={setDeleteDialogIsVisible}
        action={onDeleteUser}
        isLoading={isDeleting}
      />
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
            <UsersData
              setDeleteDialogIsVisible={setDeleteDialogIsVisible}
              setGetUserId={setGetUserId}
            />
          </TBody>
        </Table>
      </div>
    </div>
  )
}
