import { useEffect, useState } from 'react'

export default function useScreenWidth() {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth) {
      setState(window?.innerWidth)
    }
    console.log(window)
  }, [window.innerWidth])
  console.log(state)
  return state
}
