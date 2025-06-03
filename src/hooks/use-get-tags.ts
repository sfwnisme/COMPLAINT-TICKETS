import React from 'react'
import useGetAllData from './use-get-all-data'

export default function useGetTags() {
  return useGetAllData('/tags')
}
