import React from 'react'

import {
  Link
} from './custom-link.styles'

const CustomLink = ({ children, ...otherProps }) => {
    return (
      <Link href="" {...otherProps}>
        {children}
      </Link>
    )
}

export default CustomLink