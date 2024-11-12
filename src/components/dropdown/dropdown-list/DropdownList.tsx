import S from './DropdownList.module.css'

type Props = {}

let id = 0

const dummyListData = [
  { id: id++, title: 'About' },
  { id: id++, title: 'Dashboard' },
  { id: id++, title: 'Profile' },
  { id: id++, title: 'Settings' },
]

export default function DropdownList({ list = dummyListData }: Props) {

  const listContent = list.map((l: { id: number, title: string }) =>
    <li className={S.dropdown_list_item} id={l.id.toString()} key={l.id}>{l.title}</li>
  )

  return (
    // <div className={`${S.dropdown}`}>
      <ul className={S.dropdown_list}>
        {listContent}
      </ul>
    // </div>
  )
}