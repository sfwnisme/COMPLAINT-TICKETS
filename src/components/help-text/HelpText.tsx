import { Info } from "lucide-react";
import S from './HelpText.module.css'
import { Variants } from "../../types/types";

type Props = {
  children: React.ReactNode,
  variant?: Variants,
  icon?: 'visible' | 'invisible'
}

export default function HelpText({ children = '', variant = 'primary', icon = 'visible' }: Props) {

  const variants = {
    primary: S['help-text--primary'],
    info: S['help-text--info'],
    success: S['help-text--success'],
    warning: S['help-text--warning'],
    danger: S['help-text--danger'],
  }

  return (
    <p className={`${S['help-text']} ${variants[variant]}`}>{icon === 'visible' && <Info size={13} className={S['help-text__icon']} />} {children}</p>
  )
}