import React from 'react'
import { useParams } from 'react-router-dom'


export default function UpdateUser() {
  const { userId } = useParams()
  console.log(userId)
  return (
    <div>UpdateUser: {userId}</div>
  )
}