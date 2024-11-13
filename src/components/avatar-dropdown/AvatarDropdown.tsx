import React, { useState } from 'react'
import Avatar from '../avatar/Avatar'
import List from '../list/List'
import S from './AvatartDropdown.module.css'

type Props = {
  children: React.ReactNode;
  // position: 'right' | 'left'
}

export default function AvatarDropdown({ children }: Props) {

  const [toggle, setToggle] = useState(false)
  const handleListToggle = () => {
    setToggle((prev) => !prev)
  }
  return (
    <div className={S['avatar-dropdown']}>
      <Avatar onClick={handleListToggle} />
      {toggle && children}
    </div>
  )
}