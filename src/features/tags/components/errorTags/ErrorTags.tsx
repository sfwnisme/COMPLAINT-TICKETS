import Alert from '../../../../components/alert/Alert'

type Props = {
  error: string
}

export default function ErrorTags({ error }: Readonly<Props>) {
  return <Alert visible variant='danger' hasIcon>{error}</Alert>
}