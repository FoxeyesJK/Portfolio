import styled from 'styled-components'
import { SectionStyles, HeaderStyles, ListStyles, SubColor, RedColor, GreyColor, TextColor } from '../../global.styles';

export const CareerContainer = styled.div`
    ${SectionStyles}
    height: 90vh;
`

export const CareerInnerContainer = styled.div`
    max-width: 1000px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid ${GreyColor};

    &::before {
        margin: 20px 0 0 20px;
        content: "";
        z-index: -1;
        border: 2px solid ${SubColor};
        border-image: initial;
        display: block;
        position: absolute;
        width: 1000px;
        height: 400px;
        border-radius: 3px;
        transition: 0.3s;


        @media screen and (max-width: 1000px) {
            max-width: 80%;
        }
    }

    &:hover {
        &::before {
            margin: 15px 0 0 15px;
            transition: 0.3s;
        }
    }

    @media screen and (max-width: 1000px) {
        max-width: 80%;
    }
`


export const CareerHeader = styled.h1`
    ${HeaderStyles}
    text-align: left;
    max-width: 700px;  
    height: auto;
    margin: 40px auto 20px auto;

    @media screen and (max-width: 1000px) {
        text-align: center;
        margin; 0 auto;
    }
`

export const ContentsContainer = styled.div`
    display: flex;
    max-width: 700px;
    height: 100%;
    margin: auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export const ListContainer = styled.ul`
    margin: 0;
    padding: 30px 0;

    @media screen and (max-width: 1000px) {
        display: flex;
        padding: 0;
        margin: 0 auto;
    }
`

export const TabContainer = styled.li`
`

export const TabButton = styled.button`
    width: 130px;
    background-color: inherit;
    color: ${TextColor};
    cursor: pointer;
    border: 0;
    border-left: 2px solid ${GreyColor};
    padding: 20px;
    text-align: left;
    outline: none;
    font-family: Arial;

    @media screen and (max-width: 1000px) {
        width: 90px;
        border-left: 0;
        text-align: center;
        padding: 5px;
        border-bottom: 2px solid ${GreyColor};
    }
`

export const TabActiveBar = styled.span`
    position: absolute;
    height: 55px;
    border-left: 2px solid ${RedColor};
    transition: all 0.25s cubic-bezier(0.7, 0.045, 0.3, 1) 0s;
    transform: translateY(
        ${props => props.activeTabId > 0 ? (props.activeTabId - 1) * 55 : 0}px
    );

    @media screen and (max-width: 1000px) {
        border-left: 0;
        width: 90px;
        height: 27px;
        border-bottom: 2px solid ${RedColor};
        transition: all 0.25s cubic-bezier(0.7, 0.045, 0.3, 1) 0s;
        transform: translateX(
            ${props => props.activeTabId > 0 ? (props.activeTabId - 1) * 130 : 0}px
        );
    }

`

export const DetailContainer = styled.div`
    @media screen and (max-width: 1000px) {
        text-align: center;
        margin: 0 auto;
        padding: 0 20px;
    }
`

export const DetailHeader = styled.div`
    font-size: 22px;
    padding: 10px 0;

    @media screen and (max-width: 1000px) {
        border-left: 0;
        text-align: center;
        font-size: 20px;
    }
`

export const DetailSubHeader = styled.div`
    font-size: 13px;
    color: #A0A0A0;
`

export const DetailDescriptions = styled.ul`
    padding: 0;
`

export const Description = styled.li`
    margin: 10px 0;

    @media screen and (max-width: 1000px) {
        font-size: 13px;
        ${ListStyles};
    }
`

