import { Visible } from "@sfwnisme/visi"
import Badge from "../../../../../components/badge/Badge"
import TD from "../../../../../components/table/TD"
import TR from "../../../../../components/table/TR"
import { USER_ROLES, USER_ROLES_COLORS } from "../../../../../constraints/constraints"
import Dropdown from "../../../../../components/dropdown/Dropdown"
import List from "../../../../../components/list/List"
import ListItem from "../../../../../components/list/ListItem"
import { IUser } from "../../../types"
import { useUsersStore } from "../../../../../store/users.store"
import { memo } from "react"
type Props = {
  user: IUser,
  currentUser?: Omit<IUser, 'createdAt'>,
}

const RenderUsersTable = ({ user, currentUser }: Props) => {
  const setUserId = useUsersStore((state) => state.setUserId)
  const toggleDialog = useUsersStore((state) => state.toggleDialog)
  return (
    <TR key={user._id}>
      <TD dataCell="Name">
        {user.name}
      </TD>
      <TD dataCell="Email">{user.email}</TD>
      <TD dataCell="Role"><Badge variant={USER_ROLES_COLORS[user.role]} title={user.role} text={user.role} /></TD>
      <Visible when={currentUser?._id !== user?._id}>
        <TD dataCell="Options">
          <Dropdown>
            <List position="absolute" rightOrLeft="right">
              <ListItem href={`${user._id}`}>
                View
              </ListItem>
              <Visible when={currentUser?.role === USER_ROLES.ADMIN}>
                <ListItem href={`update/${user._id}`}>Edit</ListItem>
                <ListItem onClick={() => {
                  toggleDialog()
                  setUserId(user._id)
                }}>Delete</ListItem>
              </Visible>
            </List>
          </Dropdown>
        </TD>
      </Visible>
    </TR>
  )
}

export default memo(RenderUsersTable)