import React, { useState } from 'react'
import S from './Select.module.css'
import { School } from 'lucide-react'

type Props = {}

const data = [
  { id: 1, title: 'issued', color: 'blue' },
  { id: 2, title: 'solving', color: 'yellow' },
  { id: 1, title: 'blocked', color: 'red' },
  { id: 1, title: 'closed', color: 'green' },
]

export default function Select({ }: Props) {
  const [selected, setSelected] = useState()

  const options = data.map((option) => <option id={option.id} value={option.id}>{option.title}</option>)

  return (
    <select title='select option' className={S.select}>
      <option>select</option>
      {options}
    </select>
  )
}