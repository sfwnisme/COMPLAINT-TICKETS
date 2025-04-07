import { useEffect, useState } from 'react'

export default function useMedia() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
  })

  return screenWidth
}
