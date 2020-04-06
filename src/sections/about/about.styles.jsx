import styled from 'styled-components'
import { HeaderStyles, ListStyles } from '../../global.styles';

import profileImage from '../../assets/profile.jpg'

export const AboutContainer = styled.div`
    width: 100%;
`

export const AboutHeader = styled.div`
    ${HeaderStyles}
`

export const ContentsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

export const TextContainer = styled.div`
    max-width: 480px;
`

export const DescriptionContainer = styled.div`

`

export const Description = styled.p`

`

export const ListFullContainer = styled.div`
    display: flex;
`

export const ListHalfContainer = styled.ul`
    width: 50%;
`

export const List = styled.li`
    ${ListStyles}
`

export const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 3px;
    &::before {
        margin: 20px 0 0 20px;
        content: "";
        z-index: -1;
        border: 2px solid rgb(100, 255, 218);;
        border-image: initial;
        display: block;
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 3px;
        transition: 0.3s;
    }

    &:hover {
        &::before {
            margin: 15px 0 0 15px;
            transition: 0.3s;
        }
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${profileImage});
    background-size: cover;
    border-radius: 3px;
`