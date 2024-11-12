import React from 'react'
import { TSizes } from '../defintions.components'
import S from './Link.module.css'
import { ArrowUpRight } from 'lucide-react';

type Props = {
  children: React.ReactNode,
  href: string;
  size?: TSizes;
}

export default function Link({ children = 'link', href = "https://sfwn.me", size = "xl" }: Props) {

  const sizes = {
    xs: S['link--xs'],
    sm: S['link--sm'],
    md: S['link--md'],
    lg: S['link--lg'],
    xl: S['link--xl'],
  }

  return (
    <a href={href} title={children?.toString()} className={`${S.link} ${sizes[size]}`}>
      {children}
      <ArrowUpRight className={S.icon} />
    </a>
  )
}