import styled from 'styled-components'

import { ReactComponent as GithubIcon } from '../../assets/icon-github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icon-linkedin.svg'

export const FormattedIconContainer = styled.div`
  
`

export const GithubStyledIcon = styled(GithubIcon)`
    ${IconStyles}
`

export const LinkedinStyledIcon = styled(LinkedinIcon)`
    ${IconStyles}
`