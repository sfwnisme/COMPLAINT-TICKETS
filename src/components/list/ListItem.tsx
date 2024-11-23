import React from 'react'
import S from './List.module.css'
import { NavLink } from 'react-router-dom'

type Props = {
  children: React.ReactNode;
  href?: string;
  noStyle?: boolean, // if you have nested elements like buttons and wanna disable the hover and list item styles.
} & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export default function ListItem({ children, noStyle = false, ...rest }: Props) {
  // noStyle: disables the list item styles in case you used buttons as a child
  // href: creates a link and switches the className from the <li> and the <NaveLink> to align the styles
  const isStyledListItemOrNot =
    !rest?.href
      ? noStyle
        ? `${S['list__item--no--style']} ${S['list__item']}`
        : `${S['list__item--has--style']} ${S['list__item']}`
      : ''

  return (
    <li
      className={`
      ${isStyledListItemOrNot} 
       `}
      {...rest}
    >
      {
        rest?.href ? <NavLink to={rest?.href} className={`${S['list__item--has--style']} ${S['list__item']}`} >
          {children}
        </NavLink>
          : children
      }
    </li>
  )
}

/**NOTE
 * href: if the user add href to the list elment props, it will switch the class names
 * to the <NavLink> element, to align the styling and make it easier for the developer to use it anywhere
 */