import Style from './PageHeader.module.css'
import Button from '../button/Button'
import { NavLink } from 'react-router-dom'

type Props = {
  title: string,
  button?: string,
  href?: string,
}

export default function PageHeader({ title = 'Page title', button = "", href = "/" }: Readonly<Props>) {
  return (
    <div className={Style['page-header']}>
      <h2 className={Style['page-header__title']}>{title}</h2>
      {
        button && <NavLink to={href}>
          <Button size='xl'>
            {button}
          </Button>
        </NavLink>
      }
    </div>
  )
}