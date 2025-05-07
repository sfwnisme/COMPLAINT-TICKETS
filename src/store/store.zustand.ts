import { create } from 'zustand'

type State = {
  bears: number
}

const useStore = create((set) => ({
  bears: 0,
  incrementPopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears })
}))

const useBearsStore = create(useStore)
export default useBearsStore