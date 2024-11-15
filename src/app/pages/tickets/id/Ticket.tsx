import S from './Ticket.module.css'
import TicketHeader from './components/TicketHeader'
import TicketBody from './components/TicketBody'
import TicketSidebar from './components/TicketSidebar'
import {useState} from 'react'
import Select from "../../../../components/select/Select.tsx";

export default function Ticket() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={`${S['ticket-page']} ${toggle && S['ticket-page--collapsed']}`}>
            <TicketHeader toggle={toggle} setToggle={setToggle}/>
            <TicketBody/>
            <TicketSidebar toggle={toggle} setToggle={setToggle}/>
        </div>
    )
}
