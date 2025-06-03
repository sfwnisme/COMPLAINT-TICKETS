import PageHeader from "../../../../components/pageHeader/PageHeader"
import CreateTicketForm from "../../../../features/tickets/forms/createTicketForm/CreateTicketForm"

type Props = {}

export default function CreateTicket({ }: Props) {
  return (
    <div>
      <PageHeader title="Create ticket" button="Tickets" href="/dashboard/tickets" />
      <CreateTicketForm />
    </div>
  )
}