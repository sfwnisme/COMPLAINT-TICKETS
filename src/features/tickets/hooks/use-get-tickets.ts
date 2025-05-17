import useGetAllData from '../../../hooks/useGetAllData'
import { ITicket } from '../types'

export default function useGetTickets() {
  return useGetAllData<ITicket[]>('/tickets')
}
