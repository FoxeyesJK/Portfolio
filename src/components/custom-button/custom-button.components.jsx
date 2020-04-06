import React from 'react'

import {
  CustomButtonContainer,
  Button
} from './custom-button.styles'

const CustomButton = ({children, ...otherProps}) => {
    return (
      <CustomButtonContainer>
        <Button {...otherProps}>
          {children}
        </Button>
      </CustomButtonContainer>
    )
}

export default CustomButton