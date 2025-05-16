import React, { useState } from 'react'
import S from './Dropdown.module.css'
import { EllipsisVertical } from 'lucide-react';
import Button from '../button/Button';

type Props = {
  children: React.ReactNode;
  // position: 'right' | 'left'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Dropdown({ children }: Props) {
  const [toggle, setToggle] = useState(false)
  const handleListToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className={S.dropdown}  onClick={handleListToggle} >
      <Button shape='soft' size='square'>
        <EllipsisVertical size={15} className={S['dropdown__icon']} />
      </Button>
      {toggle && children}
    </div >
  )
}

/**NOTE
 * this dropdown component works as a wrapper for the dropdown content
 * you can not use it as a dropdown menu itself
 */