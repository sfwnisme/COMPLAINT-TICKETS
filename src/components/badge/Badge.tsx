import S from './Badge.module.css'

type Props = {
  text?: string;
  variant?: "primary" | "info" | 'success' | 'warning' | 'danger'
  title?: string,
}

export default function Badge({ text = 'badge', variant = 'primary', title = 'describe the badge' }: Props) {
  const variants = {
    primary: S.primary,
    info: S.info,
    success: S.success,
    warning: S.warning,
    danger: S.danger,
  }
  const settings = S.badge + " " + variants[variant]
  return (
    <span className={settings} title={title}>{text}</span>
  )
}