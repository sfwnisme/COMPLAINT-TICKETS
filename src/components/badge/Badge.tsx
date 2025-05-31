import S from './Badge.module.css'

type Props = {
  text?: string;
  variant?: "primary" | "info" | 'success' | 'warning' | 'danger'
  title?: string,
  customColor?: string,
  dot?: boolean,
}

export default function Badge({ text = 'badge', variant = 'primary', title = 'describe the badge', customColor = "", dot = false }: Props) {
  const variants = {
    primary: S.primary,
    info: S.info,
    success: S.success,
    warning: S.warning,
    danger: S.danger,
  }

  const controlHexColor = (hexColor: string, percent: number) => {
    // Convert hex to RGB
    let r = parseInt(hexColor.slice(1, 3), 16);
    let g = parseInt(hexColor.slice(3, 5), 16);
    let b = parseInt(hexColor.slice(5, 7), 16);

    // Lighten each channel
    r = Math.min(255, r + (255 - r) * percent);
    g = Math.min(255, g + (255 - g) * percent);
    b = Math.min(255, b + (255 - b) * percent);

    // Convert back to hexColor
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
  }

  const theCustomColor = controlHexColor(customColor, 0.93)
  const theCustomColorText = controlHexColor(customColor, 0)
  const theCustomColorBorder = controlHexColor(customColor, 0.7)
  const theCustomColorDot = controlHexColor(customColor, 0.6)
  console.log(theCustomColor)

  const settings = S.badge + " " + variants[variant]
  return (
    <span className={`${settings}`} title={title} style={{ backgroundColor: theCustomColor, color: theCustomColorText, outlineColor: theCustomColorBorder }}>
      {dot && <span className={S.badge__dot} style={{ backgroundColor: theCustomColorDot }} />}
      {text}
    </span>
  )
}