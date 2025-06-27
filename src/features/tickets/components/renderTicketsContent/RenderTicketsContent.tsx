import { useMemo, useState } from 'react'
import useGetTickets from '../../hooks/use-get-tickets'
import LoadingTickets from '../loadingTickets/LoadingTickets'
import ErrorTickets from '../errorTickets/ErrorTickets'
import NoTickets from '../noTickets/NoTickets'
import RenderTickets from '../renderTickets/RenderTickets'
import RenderTicketsV2 from '../renderTicketsV2/RenderTicketsV2'
import { LayoutGrid, Menu } from 'lucide-react'
import Button from '../../../../components/button/Button'
import Style from './RenderTicketsContent.module.css'

export default function RenderTicketsContent() {
  const tickets = useGetTickets()
  const [activeLayout, setActiveLayout] = useState<'grid' | 'list'>(window.localStorage.getItem('activeLayout') as ('grid' | 'list') || 'grid')
  console.log(activeLayout)
  const handleChangeLayout = () => {
    console.log('active')
    if (activeLayout === 'grid') {
      window.localStorage.setItem('activeLayout', 'list')
    } else {
      window.localStorage.setItem('activeLayout', 'grid')
    }
    setActiveLayout(window.localStorage.getItem('activeLayout') as ('grid' | 'list'))
  }

  const content = useMemo(() => {
    if (tickets.isLoading) return <LoadingTickets />
    if (tickets.isError) return <ErrorTickets error={tickets.error.response?.data.msg ?? ''} />
    if (tickets.data?.length === 0) return <NoTickets />
    if (tickets.isSuccess) {
      if (activeLayout === 'grid') return <RenderTickets tickets={tickets?.data} />
      return <RenderTicketsV2 tickets={tickets?.data} />
    }
  },
    [
      tickets.data,
      tickets.isLoading,
      tickets.isSuccess,
      tickets.isError,
      tickets.error,
      activeLayout
    ])
  return (
    <div className={Style['render-tickets-content']}>
      <div className={Style['render-tickets-content__header']}>
        <Button shape='none' size='square' onClick={handleChangeLayout}>
          {activeLayout === 'grid' && <><Menu size={18} /> List</>}
          {activeLayout === 'list' && <><LayoutGrid size={18} />Grid</>}
        </Button>
      </div>
      {content}
    </div>
  )
}
