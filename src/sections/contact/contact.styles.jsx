import styled from 'styled-components'
import { SectionStyles, HeaderStyles, SubHeaderStyles } from '../../global.styles';

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
