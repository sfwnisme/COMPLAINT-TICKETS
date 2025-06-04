import Alert from '../../../../components/alert/Alert'

type Props = {
  error: string
}

export default function ErrorDepartments({ error }: Readonly<Props>) {
  return <Alert visible variant='danger' hasIcon>{error}</Alert>
}