import React from 'react'
import useDeleteApiData from '../../../hooks/use-delete-api-data'

type Props = {}

export default function useDeleteDepartment({}: Props) {
  return useDeleteApiData({endpoint: '/departments', revalidateKey: '/departments'})
}