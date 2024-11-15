import { Info } from "lucide-react";
import S from './HelpText.module.css'

type Props = {
  children: React.ReactNode,
  icon?: 'visible' | 'invisible'
}

export default function HelpText({ children = 'help text for short information', icon = 'visible' }: Props) {
  return (
    <p className={S['help-text']}>{icon === 'visible' && <Info size={13} className={S['help-text__icon']} />} {children}</p>
  )
}