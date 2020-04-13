import styled from 'styled-components'
import { SectionStyles, HeaderStyles, ListStyles, SubColor, RedColor, GreyColor } from '../../global.styles';

import profileImage from '../../assets/icon-boy.png'

export const AboutContainer = styled.div`
    ${SectionStyles};
    max-width: 1000px;
`

export const AboutHeader = styled.h1`
    ${HeaderStyles};
    text-align: left;
    padding: 0px;
    margin: 0;
`

export const ContentsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 20px;
    }
`

export const TextContainer = styled.div`
    max-width: 580px;
    margin: auto;
`

export const TextInnerContainer = styled.div`
`

export const DescriptionContainer = styled.div`
`

export const Description = styled.p`
    font-size: 18px;
    padding: 0 20px;
    
    &:first-child {
        border-left: 3px solid ${RedColor}
    }
`

export const ListFullContainer = styled.div`
    display: flex;
`

export const ListHalfContainer = styled.ul`
    width: 50%;
    padding: 0 20px;
`

export const List = styled.li`
    ${ListStyles}
    font-family: Courier New;
`

export const ImageContainer = styled.div`
    max-width: 300px;
    max-height: 300px;
    border-radius: 3px;

    &::before {
        margin: 20px 0 0 20px;
        content: "";
        z-index: -1;
        border: 2px solid ${SubColor};
        border-image: initial;
        display: block;
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 3px;
        transition: 0.3s;

        @media screen and (max-width: 1000px) {
            width: 200px;
            height: 200px;
        }
    }
    
    &:hover {
        &::before {
            margin: 15px 0 0 15px;
            transition: 0.3s;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 200px;
        height: 200px;
        margin: 0 auto 50px auto;
    }
`

export const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    // background-image: url(${profileImage});
    // background-size: cover;
    border-radius: 3px;
    border: 1px solid ${GreyColor};
`
