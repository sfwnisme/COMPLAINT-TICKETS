import { useCallback, useState } from 'react'
import Avatar from '../avatar/Avatar'
import DropdownList from './dropdown-list/DropdownList'
import S from './DropdwonAvatar.module.css'


export default function DropdownAvatar() {
  const [isopenDropdown, setIsOpenDropdown] = useState(false)
  const handleOpenDropdown = useCallback(() => {
    setIsOpenDropdown((prev) => !prev)
  }, [])
  return (
    <div className={S['avatar-with-list']}>
      <Avatar onClick={handleOpenDropdown} />
      {isopenDropdown && <DropdownList />}
    </div>
  )
}