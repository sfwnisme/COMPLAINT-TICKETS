import Ticket from '../../../components/ticket/Ticket.tsx'
import Title from '../../../components/title/Title.tsx'
import S from './Tickets.module.css'

const tickets: {
  title: string;
  ticketType: 'complaint' | 'inquiry' | 'suggestion';
  ticketId: number;
  ticketCreator: string;
  department: string;
  status: string;
  periority: string;
  tagsIds: number[];
  createdAt: string;
}[] = [
    { title: "Application Crashes During Startup", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Slow Loading Times in Dashboard", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [2], createdAt: 'Created 3 days ago' },
    { title: "Cannot Save Changes to Profile", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 5], createdAt: 'Created 3 days ago' },
    { title: "Login Authentication Failed Multiple Times", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Data Not Syncing Between Devices", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Error 404 on Critical Pages", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [93, 5], createdAt: 'Created 3 days ago' },
    { title: "Memory Leak Causing System Slowdown", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Search Function Returns Incorrect Results", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Unable to Export Reports to PDF", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'low', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Calendar Events Disappearing Randomly", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Incompatible with Latest OS Update", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [5], createdAt: 'Created 3 days ago' },
    { title: "Freezes During Video Playback", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'low', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Missing Features from Latest Update", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Unresponsive User Interface", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Database Connection Timeout", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Incorrect Calculations in Spreadsheet", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "File Upload Failed Repeatedly", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'low', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Notifications Not Working", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Print Function Not Responding", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'medium', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Settings Reset After Each Login", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
    { title: "Broken Links in Navigation Menu", ticketType: 'complaint', ticketId: 1, ticketCreator: 'sfwn', department: 'marketing', status: 'issued', periority: 'high', tagsIds: [2, 12, 93, 5], createdAt: 'Created 3 days ago' },
  ]

export default function Tickets() {

  const ticketsContent = tickets.map((ticket) => (
    <Ticket title={ticket.title} ticketType={ticket.ticketType} ticketCreator={ticket.ticketCreator} department={ticket.department} status={ticket.status} periority={ticket.periority} tagsIds={ticket.tagsIds} createdAt={ticket.createdAt} ticketId={ticket.ticketId} key={ticket.ticketId} />
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