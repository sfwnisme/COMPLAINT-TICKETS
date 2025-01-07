import { TTicketTypes } from '../../../components/defintions.components.ts';
import Ticket from '../../../components/ticket/Ticket.tsx'
import Title from '../../../components/title/Title.tsx'
import S from './Tickets.module.css'

const tickets: {
  title: string;
  ticketType: TTicketTypes;
  ticketId: number;
  creatorId: number;
  departmentId: number;
  statusId: number;
  priorityId: number;
  tagsIds: number[];
  createdAt: string;
}[] = [
    { title: "Application Crashes During Startup", ticketType: 'inquiry', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 3, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Slow Loading Times in Dashboard", ticketType: 'complaint', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 3, priorityId: 2, tagsIds: [2], createdAt: 'Created 3 days ago' },
    { title: "Cannot Save Changes to Profile", ticketType: 'inquiry', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 3, priorityId: 3, tagsIds: [2, 5], createdAt: 'Created 3 days ago' },
    { title: "Login Authentication Failed Multiple Times", ticketType: 'complaint', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 1, priorityId: 2, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Data Not Syncing Between Devices", ticketType: 'suggestion', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 4, priorityId: 3, tagsIds: [12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Error 404 on Critical Pages", ticketType: 'inquiry', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 1, priorityId: 2, tagsIds: [93, 5], createdAt: 'Created 3 days ago' },
    { title: "Memory Leak Causing System Slowdown", ticketType: 'inquiry', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 3, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Search Function Returns Incorrect Results", ticketType: 'complaint', ticketId: 1, creatorId: 1, departmentId: 1, statusId: 2, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Unable to Export Reports to PDF", ticketType: 'inquiry', ticketId: 1, creatorId: 2, departmentId: 1, statusId: 4, priorityId: 1, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Calendar Events Disappearing Randomly", ticketType: 'complaint', ticketId: 1, creatorId: 2, departmentId: 1, statusId: 1, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Incompatible with Latest OS Update", ticketType: 'suggestion', ticketId: 1, creatorId: 2, departmentId: 1, statusId: 1, priorityId: 2, tagsIds: [5], createdAt: 'Created 3 days ago' },
    { title: "Freezes During Video Playback", ticketType: 'complaint', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 3, priorityId: 1, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Missing Features from Latest Update", ticketType: 'inquiry', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 4, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Unresponsive User Interface", ticketType: 'inquiry', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 4, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Database Connection Timeout", ticketType: 'complaint', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 3, priorityId: 2, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Incorrect Calculations in Spreadsheet", ticketType: 'complaint', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 3, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "File Upload Failed Repeatedly", ticketType: 'inquiry', ticketId: 1, creatorId: 2, departmentId: 3, statusId: 2, priorityId: 1, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Notifications Not Working", ticketType: 'inquiry', ticketId: 1, creatorId: 3, departmentId: 3, statusId: 3, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Print Function Not Responding", ticketType: 'suggestion', ticketId: 1, creatorId: 3, departmentId: 2, statusId: 2, priorityId: 2, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Settings Reset After Each Login", ticketType: 'inquiry', ticketId: 1, creatorId: 3, departmentId: 2, statusId: 2, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Broken Links in Navigation Menu", ticketType: 'complaint', ticketId: 1, creatorId: 3, departmentId: 2, statusId: 1, priorityId: 3, tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
  ]

export default function Tickets() {
//consoe.log9(;lkajdsf)
  const ticketsContent = tickets.map((ticket) => (
    <Ticket title={ticket.title} ticketType={ticket.ticketType} creatorId={ticket.creatorId} departmentId={ticket.departmentId} statusId={ticket.statusId} priorityId={ticket.priorityId} tagsIds={ticket.tagsIds} createdAt={ticket.createdAt} ticketId={ticket.ticketId} key={ticket.ticketId} />
  ))
  return (
    <div>
      <Title text='Tickets' />
      <div className={S.tickets}>
        {ticketsContent}
      </div>
    </div >
  )
}
