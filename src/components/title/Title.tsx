import S from './Title.module.css'

type Props = {
  text: string,
}

export default function Title({ text = 'this is title' }: Props) {
  return (
    <h3 className={S.title}>{text}</h3>
  )
}