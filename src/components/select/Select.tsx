// import React, { useState } from 'react'
import S from './Select.module.css'
import {ChevronsUpDown} from "lucide-react";

type Props = {}

const data = [
  {id: 1, title: 'issued', color: 'blue'},
  {id: 2, title: 'solving', color: 'yellow'},
  {id: 1, title: 'blocked', color: 'red'},
  {id: 1, title: 'closed', color: 'green'},
  {id: 1, title: 'closedasfasdfasdfasdfsadfsadfsadfsdf', color: 'green'},
]

export default function Select({}: Props) {
  const options = data.map((option) => <option id={option.id} value={option.id}>{option.title}</option>)

  return (
    <div className={S['select-container']}>
      <select title='select option' className={S.select} defaultChecked={true}>
        <option>select one</option>
        {options}
      </select>
      <ChevronsUpDown className={S['select__icon']}/>
    </div>
  )
}