import styled from 'styled-components'
import { MintColor, RedColor } from '../../global.styles';

export const IntroContainer = styled.div`
    padding: 150px 0;
`

export const TopContainer = styled.div`
    width: 100%;
    height: 35vh;
    background-color: ${MintColor}; 
    padding: 0 300px;

    @media screen and (max-width: 1000px) {
        padding: 0 70px;
    }
`

export const BottomContainer = styled.div`
    height: 15vh;
`

export const HeaderContainer = styled.div`
    display: flex;
    font-size: 200px;
    padding-top: 20vh;

    @media screen and (max-width: 1000px) {
        padding-top: 24vh;
        font-size: 140px;
    }

    @media screen and (max-width: 500px) {
        padding-top: 27vh;
        font-size: 100px;
    }
`


export const Header1 = styled.div`
    font-family: Arial Black;
    text-transform: uppercase;
    //letter-spacing: 10px;
`

export const Header2 = styled.div`
    color: ${MintColor};
    font-family: Arial Black;
`

export const Header3 = styled.div`
    font-size: 20px;
`

export const SubHeaderContainer = styled.div`
    padding: 0 90px;

    &::before {
        content: "";
        display: block;
        width: 100px;
        height: 3px;
        background-color: ${RedColor};
        margin: auto -30px;
    }

    @media screen and (max-width: 1000px) {
        padding: 0;
    }
`

export const SubHeader1 = styled.div`
    font-size: 24px;
    font-family: Arial;
    padding: 10px 0;

`

export const SubHeader2 = styled.div`
    font-size: 20px;
    font-family: Arial;
`

export const Contents = styled.p`
    font-size: 20px;
`

export const CustomLinkContainer = styled.div`
    width: 150px;
    margin: 40px 0;
`

