import { useCallback } from 'react'
import useDeleteApiData from '../../../hooks/use-delete-api-data'
import { useUsersStore } from '../../../store/users.store'

export default function useDeleteUser() {
  const userId = useUsersStore((state) => state.userId)
  const setUserId = useUsersStore((state) => state.setUserId)
  const { mutateAsync, isPending } = useDeleteApiData({
    endpoint: "/users", revalidateKey: "/users"
  })

  const onDeleteUser = useCallback(async () => {
    await mutateAsync(userId)
    setUserId('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])
  return { onDeleteUser, isPending }
}