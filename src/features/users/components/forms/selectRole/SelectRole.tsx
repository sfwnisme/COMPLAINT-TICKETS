import React from 'react'
import Select from '../../../../../components/select/Select'
import { USER_ROLES } from '../../../../../constraints/constraints'
type Props = {
  title: string,
  // id: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectRole = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ...rest }, ref) => {
    return (
      <Select ref={ref} title={title} {...rest} >
        <option disabled value="">
          Select Role
        </option>
        {Object.values(USER_ROLES).map((role) => (
          <option key={role} value={role} id={role}>
            {role}
          </option>
        ))}
      </Select>
    )
  }
)
export default SelectRole
