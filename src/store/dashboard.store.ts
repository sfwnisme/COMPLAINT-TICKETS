import { create } from 'zustand'

type State = {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

export const useDashboard = create<State>((set) => ({
  isSidebarVisible: false,
  toggleSidebar: () => set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
}))
