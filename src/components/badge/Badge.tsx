import S from './Badge.module.css'

type Props = {
  text?: string;
  variant?: "primary" | "info" | 'success' | 'warning' | 'danger'
}

export default function Badge({ text = 'badge', variant = 'primary' }: Props) {
  const variants = {
    primary: S.primary,
    info: S.info,
    success: S.success,
    warning: S.warning,
    danger: S.danger,
  }
  const settings = S.badge + " " + variants[variant]
  return (
    <span className={settings}>{text}</span>
  )
}