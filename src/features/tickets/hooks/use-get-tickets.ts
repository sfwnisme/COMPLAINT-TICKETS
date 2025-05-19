import useGetAllData from '../../../hooks/use-get-all-data'
import { ITicket } from '../types'

export default function useGetTickets() {
  return useGetAllData<ITicket[]>('/tickets')
}
