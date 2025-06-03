import React from 'react'
import Select from '../../../../components/select/Select'
import useGetUsers from '../../../users/hooks/use-get-users'

type Props = {
  title: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectUser = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ...rest }, ref) => {
    const { data } = useGetUsers()
    const users = data ?? []

    return (
      <Select ref={ref} title={title} {...rest} >
        <option disabled value="">
          Select User
        </option>
        {users.map((user) => (
          <option key={user?._id} value={user?._id} id={user?._id}>
            {user?.name}
          </option>
        ))}
      </Select>
    )
  }
)
export default SelectUser
