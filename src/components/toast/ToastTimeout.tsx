import React, { useEffect, useState } from 'react'
import Toast from './Toast'

function ToastTimeout() {
  const [close, setClose] = useState(true)
  useEffect(() => {
    setClose(false)
    setTimeout(() => setClose(true), 3000)
  }, [])
  return <div>{!close && <Toast />}</div>
}

export default ToastTimeout