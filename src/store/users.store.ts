import { create } from 'zustand'

type State = {
  isDialogVisible: boolean;
  toggleDialog: () => void;
  userId: string,
  setUserId: (id: string) => void
}

export const useUsersStore = create<State>((set) => ({
  isDialogVisible: false,
  toggleDialog: () => set((state) => ({ isDialogVisible: !state.isDialogVisible })),
  userId: "",
  setUserId: (id) => set(({ userId: id })),
}))
