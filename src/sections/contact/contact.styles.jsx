import styled, { css } from 'styled-components'
import { SectionStyles, HeaderStyles, SubHeaderStyles } from '../../global.styles';
import { ReactComponent as GithubIcon } from '../../assets/icon-github-black.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/icon-linkedin-black.svg'

const IconStyles = css`
    width: 100%;
    height: 100%;
    padding: 10px;
`

export const ContactContainer = styled.div`
    ${SectionStyles};
    max-width: 700px;
    height: 80vh;
    text-align: center;
    margin: auto;
`

export const ContactHeader = styled.h1`
    ${HeaderStyles};
    margin-top: 100px;
`

export const ContactSubHeader = styled.h2`
    ${SubHeaderStyles};
`

export const ContentsContainer = styled.div`
    font-size: 20px;
    padding: 20px;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Link = styled.a`
    display: block;
    width: 50px;
    height: 50px;
`

export const GithubStyledIcon = styled(GithubIcon)`
    ${IconStyles}
`

export const LinkedinStyledIcon = styled(LinkedinIcon)`
    ${IconStyles}
`