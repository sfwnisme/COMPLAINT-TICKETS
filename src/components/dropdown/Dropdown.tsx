import React, {  useEffect, useRef, useState } from 'react'
import S from './Dropdown.module.css'
import { EllipsisVertical } from 'lucide-react';
import Button from '../button/Button';

type Props = {
  children: React.ReactNode;
  // position: 'right' | 'left'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Dropdown({ children }: Props) {
  const [toggle, setToggle] = useState(false)
  const dropdownRef = useRef(null)
  const handleListToggle = () => {
    setToggle((prev) => !prev)
  }

  useEffect(() => {
    console.log('effect', toggle)
    const handleClickedOutside = (event) => {
      console.log('invoked', dropdownRef.current)
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        // if (dropdownRef.current && !event.target) {
        setToggle(false)
      }
    }

    if (toggle) {
      document.addEventListener('click', handleClickedOutside)
      return () => {
        document.removeEventListener('click', handleClickedOutside)
      }
    }
  })
  return (
    <div className={S['dropdown']} onClick={handleListToggle} ref={dropdownRef}>
      <Button outline size='square'>
        <EllipsisVertical size={15} className={S['dropdown__icon']} />
      </Button>
      {toggle && children}
    </div>
  )
}

/**NOTE
 * this dropdown component works as a wrapper for the dropdown content
 * you can not use it as a dropdown menu itself
 */