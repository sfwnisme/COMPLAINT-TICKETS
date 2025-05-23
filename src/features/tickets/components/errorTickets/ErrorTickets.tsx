import Alert from '../../../../components/alert/Alert'

export default function ErrorTickets({ error = 'error message' }: { error: string }) {
  return <Alert visible variant='danger' hasIcon>{error}</Alert>
}