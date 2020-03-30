import styled, { css } from 'styled-components'

import { ReactComponent as GithubIcon } from '../../assets/icon-github.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icon-linkedin.svg'

const IconStyles = css`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const SiderLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        background-color: rgb(168, 178, 209);
        margin: 0 auto;
    }
`

export const IconContainer = styled.div`
    &:last-child {
        margin-bottom: 20px;
    }
`

export const GithubStyledIcon = styled(GithubIcon)`
    ${IconStyles}
`

export const LinkedinStyledIcon = styled(LinkedinIcon)`
    ${IconStyles}
`

export const Link = styled.a`
    display: block;
    width: 40px;
    height: 40px;
`


