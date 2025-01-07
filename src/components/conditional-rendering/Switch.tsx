import React, { isValidElement } from 'react'
import Match from './Match'

type SwitchProps = {
  fallback?: React.ReactNode,
  children: React.ReactNode,
}


export default function Switch({ fallback = null, children }: SwitchProps) {
  // strongly convert to array
  // this scenario helps if there is only single children
  const childrenArray: React.ReactNode[] = React.Children.toArray(children)

  // loop the array of children
  for (const element of childrenArray) {
    //check if it's valid react element
    //check if the element when prop is not undefined
    //check if the element type exactly is Match component
    //note: if the type !== Match it will return the fallback
    if (isValidElement(element) && element.props.when && element.type === Match) {
      return element
    }
  }

  return fallback
}