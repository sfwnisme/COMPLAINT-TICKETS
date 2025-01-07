type Props<T> = {
  when: T | undefined | null | false,
  fallback?: React.ReactNode,
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export default function RenderIt<T>({ when, fallback = null, children }: Props<T>) {
  return when ? children : fallback
} 