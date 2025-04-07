import React from 'react'
import HelpText from '../components/help-text/HelpText'
import { TVariants } from '../components/defintions.components'


export default function useApiMessage(msg: string | { [key: string]: string }[] | null | undefined = '', type: TVariants): React.ReactElement {

  // let renderMessage: React.ReactNode | string
  if (!msg) {
    return <></>
  }

  if (Array.isArray(msg)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {
          msg.map((m, idx) => (
            <HelpText variant={type} key={m.path} icon='invisible'>
              {idx + 1} - <strong>{m.path}:</strong> {m.msg}
            </HelpText>
          ))
        }
      </div>
    )
  }

  return (
    <div>
      {msg}
    </div>
  )
}