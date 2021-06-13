import Link from 'next/link'
import { cloneElement } from 'react'
import { withRouter } from 'next/router'
import { Children } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActiveLink = withRouter(({ router, children, ...props }: any) => (
  <Link {...props}>
    {cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
))

export default ActiveLink
