import React from 'react'
import Select from '../../../../components/select/Select'
import useGetTags from '../../../../hooks/use-get-tags'

type Props = {
  title: string,
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement>
const SelectTags = React.forwardRef<HTMLSelectElement, Props>(
  ({ title, ...rest }, ref) => {
    const { data } = useGetTags()
    console.log(data)
    const tags = data ?? []

    return (
      <Select ref={ref} title={title} {...rest} >
        <option disabled value="">
          Select User
        </option>
        {tags.map((user) => (
          <option key={user?._id} value={user?._id} id={user?._id}>
            {user?.name}
          </option>
        ))}
      </Select>
    )
  }
)
export default SelectTags
