import { EyeClosed, FileWarning, Info, ParenthesesIcon } from "lucide-react";
import S from './HelpText.module.css'
import { Variants } from "../defintions.components";

type Props = {
  children: React.ReactNode,
  variant?: Variants,
  icon?: 'visible' | 'invisible'
}

export default function HelpText({ children = 'help text for short information', variant = 'primary', icon = 'visible' }: Props) {

  const variants = {
    primary: S['help-text--primary'],
    info: S['help-text--info'],
    success: S['help-text--success'],
    warning: S['help-text--warning'],
    danger: S['help-text--danger'],
  }
  const type = {
    normal: "",
    info: <Info size={13} className={S['help-text__icon']} />,
    warning: <FileWarning size={13} className={S['help-text__icon']} />,
    danger: <EyeClosed size={13} className={S['help-text__icon']} />,
    success: <ParenthesesIcon size={13} className={S['help-text__icon']} />,
  }

  return (
    <p className={`${S['help-text']} ${variants[variant]}`}>{icon === 'visible' && <Info size={13} className={S['help-text__icon']} />} {children}</p>
  )
}