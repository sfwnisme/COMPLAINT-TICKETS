import React from 'react'
import { TSizes } from '../defintions.components'
import S from './Link.module.css'
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode,
  href: string;
  size?: TSizes;
  icon?: 'arrow' | 'none'
}

export default function Link({ children = 'link', href = "https://sfwn.me", size = "xl", icon = 'arrow', ...rest }: Props) {

  const sizes = {
    xs: S['link--xs'],
    sm: S['link--sm'],
    md: S['link--md'],
    lg: S['link--lg'],
    xl: S['link--xl'],
  }

  return (
    <NavLink to={href} title={children?.toString()} className={`${S.link} ${sizes[size]}`} {...rest}>
      {children}
      {icon === 'arrow' && <ArrowUpRight className={S.icon} />}
    </NavLink>
  )
}