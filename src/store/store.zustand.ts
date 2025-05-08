import { create } from 'zustand'

type State = {
  isFloatTicketVisible: boolean;
  toggleFloatTicket: () => void;
  ticketId: string,
  setTicketId: (id: string) => void
}

export const useFloatTicket = create<State>((set) => ({
  isFloatTicketVisible: false,
  toggleFloatTicket: () => set((state) => ({ isFloatTicketVisible: !state.isFloatTicketVisible })),
  ticketId: "",
  setTicketId: (id) => set(({ ticketId: id }))
}))
