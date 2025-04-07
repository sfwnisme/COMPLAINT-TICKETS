import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCurrentUser } from '../store/users'

type Props = {}

export default function useGetCurrentUser() {
  const currentUser = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    select: (response) => {
      return response.data.data
    },
    retry: false,
    
  })
  return currentUser
}