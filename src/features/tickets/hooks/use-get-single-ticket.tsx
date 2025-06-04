import useGetSingleApiData from '../../../hooks/use-get-single-api-data'
import { ITicket } from '../../../types/types'

const initialData: ITicket = {
  _id: "6817cb2046347442039fb82c",
  title: "Discount code not applying",
  description: "SUMMER25 promo code shows as invalid for eligible products",
  status: "in-progress",
  priority: "medium",
  createdBy: {
    _id: "67e0b2ccbf1e5c614433fe5d",
    name: "admin"
  },
  department: {
    _id: "681220095a45bfc7d6876eeb",
    title: "sales"
  },
  tags: [
    {
      _id: "680a9e491cecb7cdf120bf31",
      name: "tag2",
      color: "#bd009f"
    }
  ],
  createdAt: "2025-05-04T20:16:32.478Z",
  updatedAt: "2025-05-16T00:50:02.847Z",
  assignedTo: {
    _id: '',
    name: ''
  }
}

export default function useGetSingleTicket(ticketId: string) {
  return useGetSingleApiData<ITicket>({ endpoint: '/tickets', id: ticketId, initialData })
}