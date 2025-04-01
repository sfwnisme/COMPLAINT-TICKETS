import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Title from "../../../components/title/Title"
import S from './Users.module.css'
import Table from "../../../components/table/Table"
import THead from "../../../components/table/THead"
import TR from "../../../components/table/TR"
import TD from "../../../components/table/TD"
import TBody from "../../../components/table/TBody"
import Badge from "../../../components/badge/Badge"
import TH from "../../../components/table/TH"
import Link from "../../../components/Link/Link"
import { IUser } from '../../../../types'
import { TVariants } from "../../../components/defintions.components"
import Dropdown from "../../../components/dropdown/Dropdown"
import List from "../../../components/list/List"
import ListItem from "../../../components/list/ListItem"

export default function Users() {

  const query = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const users = await axios.get('http://localhost:5000/api/users')
      console.log(users)
      return users
    }
  })
  const users = query.data?.data
  const { isLoading, isSuccess, isError, isPending, error, status } = query
  console.log(status)

  // const roles = ['admin', 'manager', 'csr', 'view_only']
  const roles = {
    admin: 'success',
    manager: 'warngin',
    csr: 'info',
    'view_only': 'primary'
  }

  // const roleColor = roles.map((role) => (

  // ))

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
        {JSON.stringify(error)}
      </TD>
    </TR>
  )

  const renderData = users?.data.map((user: IUser) => (
    <TR key={user._id}>
      <TD>{user._id}</TD>
      <TD>
        {user.name}
      </TD>
      <TD>{user.email}</TD>
      <TD><Badge variant={roles[user?.role] as TVariants} title={user.role} text={user.role} /></TD>
      <TD>
        <Dropdown>
          <List position="absolute" rightOrLeft="right">
            <ListItem href={`/users/${user._id}`}>
              {/* <Link href={`/users/${user._id}`} icon="none"> */}
              View
              {/* </Link> */}
            </ListItem>
            <ListItem>Edit</ListItem>
            <ListItem>Delete</ListItem>
          </List>
        </Dropdown>
        {/* <div style={{ display: 'flex', gap: '5px' }}>
          <Button type="submit" variant="danger" size="xs" outline>
            <Trash size={18} />
          </Button>
          <Button type="submit" variant="info" size="xs" outline>
            <Link href={`/users/${user._id}`} icon="none">
              <UserRoundCog size={18} />
            </Link>
          </Button>
        </div> */}
      </TD>
    </TR >
  ))

  let renderUsers;
  if (users?.length === 0) {
    renderUsers = renderEmpty
  }
  if (isLoading) {
    renderUsers = renderLoading
  }
  if (isError) {
    renderUsers = renderError
  }
  if (isSuccess) {
    renderUsers = renderData
  }


  return (
    <div>
      <Title text='Users' />
      <div className={S.users}>

        <Table>
          <THead>
            <TR>
              <TH>ID</TH>
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
