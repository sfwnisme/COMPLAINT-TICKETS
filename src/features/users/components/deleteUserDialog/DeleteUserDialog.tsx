import Dialog from '../../../../components/dialog/Dialog'
import DialogHeader from '../../../../components/dialog/DialogHeader'
import Button from '../../../../components/button/Button'
import DialogBody from '../../../../components/dialog/DialogBody'
import DialogFooter from '../../../../components/dialog/DialogFooter'
import { useUsersStore } from '../../../../store/users.store'
import useDeleteUser from '../../hooks/use-delete-user'
import { X } from 'lucide-react'

export default function DeleteUserDialog() {
  const isDialogVisible = useUsersStore((state) => state.isDialogVisible)
  const toggleDialog = useUsersStore((state) => state.toggleDialog)

  const { onDeleteUser, isPending: isDeleting } = useDeleteUser()
  const handleDeleteUser = async () => {
    await onDeleteUser()
    toggleDialog()
  }
  return (
    <Dialog isVisible={isDialogVisible}>
      <DialogHeader>
        <Button shape="soft" size="square" onClick={toggleDialog}><X /></Button>
      </DialogHeader>
      <DialogBody>
        <h4>Delete User</h4>
        <p>Are you sure, you wanna delete user</p>
      </DialogBody>
      <DialogFooter>
        <Button variant="danger" onClick={handleDeleteUser}>{!isDeleting ? 'Delete' : 'Deleting...'}</Button>
        <Button shape="soft" onClick={toggleDialog}>Cancel</Button>
      </DialogFooter>
    </Dialog>
  )
}
