import S from './Ticket.module.css'
import TicketHeader from './components/TicketHeader'
import TicketBody from './components/TicketBody'
import TicketSidebar from './components/TicketSidebar'
import { useState } from 'react'
import useMedia from '../../../../hooks/use-media'

export default function Ticket() {
    const media = useMedia()
    const [isSidebarOpen, setIsSidebarOpen] = useState(media > 768 ? true : false)

    return (
        <div className={`${S['ticket-page']} ${!isSidebarOpen && S['ticket-page--collapsed']}`}>
            <TicketHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <TicketBody />
            <TicketSidebar />
        </div>
    )
}
