import React, { useState } from 'react'
import Avatar from '../avatar/Avatar'
import S from './AvatartDropdown.module.css'

type Props = {
  children: React.ReactNode;
  name: string,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function AvatarDropdown({ children, name }: Props) {

  const [toggle, setToggle] = useState(false)
  const handleListToggle = () => {
    setToggle((prev) => !prev)
  }
  return (
    <div className={S['avatar-dropdown']}>
      <Avatar name={name} onClick={handleListToggle} />
      {toggle && children}
    </div>
  )
}