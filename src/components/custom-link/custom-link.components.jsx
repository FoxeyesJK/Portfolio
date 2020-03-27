import React from 'react'

import {
  Link
} from './custom-link.styles'

const CustomLink = ({ children }) => {
    return (
      <Link href="">
        {children}
      </Link>
    )
}

export default CustomLink