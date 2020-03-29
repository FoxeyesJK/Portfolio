import styled, { css } from 'styled-components'

import { ReactComponent as GithubIcon } from '../../assets/icon-github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icon-linkedin.svg'

const IconStyles = css`
    width: 40px;
    height: 40px;
    padding: 10px;
`

export const SiderContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
`

export const IconContainer = styled.ul`

`

export const GithubStyledIcon = styled(GithubIcon)`
    ${IconStyles}
`

export const LinkedinStyledIcon = styled(LinkedinIcon)`
    ${IconStyles}
`

export const Link = styled.a`

`


