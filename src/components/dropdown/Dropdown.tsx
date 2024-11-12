import { ArrowDown, ChevronDown, ChevronUp } from 'lucide-react'
import S from './Dropdown.module.css'
import { useCallback, useState } from 'react'
import Button from '../button/Button'

type Props = {}

let id = 0

const dummyListData = [
  { id: id++, title: 'About' },
  { id: id++, title: 'Dashboard' },
  { id: id++, title: 'Profile' },
  { id: id++, title: 'Settings' },
]

export default function Dropdown({ list = dummyListData }: Props) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleOpenDropdown = useCallback(() => {
    setIsOpenDropdown((prev) => !prev)
  }, [])

  const listContent = list.map((l: { id: number, title: string }) =>
    <li className={S.dropdown_list_item} id={l.id.toString()} key={l.id}>{l.title}</li>
  )

  return (
    <div className={`${S.dropdown}`}>
      <Button outline size='sm' onClick={handleOpenDropdown}>
        <span className={S.dropdown_title}>
          Options
          <ChevronUp size={18} className={`${isOpenDropdown ? S.dropdown_title_arrow_up : S.dropdown_title_arrow_down}`} />
        </span></Button>
      {
        isOpenDropdown &&
        <ul className={S.dropdown_list} onClick={handleOpenDropdown}>
          {listContent}
        </ul>
      }
    </div>
  )
}