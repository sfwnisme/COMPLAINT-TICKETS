import {Info} from "lucide-react";
import S from './HelpText.module.css'

type Props = {
  children: React.ReactNode,
}

export default function HelpText({children = 'help text for short information'}: Props) {
  return (
    <p className={S['help-text']}><Info size={13} className={S['help-text__icon']}/> {children}</p>
  )
}