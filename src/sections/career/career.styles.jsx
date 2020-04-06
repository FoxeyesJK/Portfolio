import styled from 'styled-components'
import { HeaderStyles, ListStyles } from '../../global.styles';

export const CareerContainer = styled.div`

`

export const CareerHeader = styled.div`
    ${HeaderStyles}
`

export const ContentsContainer = styled.div`
    display: flex;
`

export const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
`

export const TabContainer = styled.li`
    list-style: none;
    //padding: 0 10px;
`

export const TabButton = styled.button`
    width: 130px;
    background-color: inherit;
    color: white;
    cursor: pointer;
    border: 0;
    border-left: 2px solid white;
    padding: 20px;
    text-align: left;
    outline: none;

`

export const TabActiveBar = styled.span`
    position: absolute;
    height: 55px;
    border-left: 2px solid red;
    transition: all 0.25s cubic-bezier(0.7, 0.045, 0.3, 1) 0s;
    transform: translateY(
        ${props => props.activeTabId > 0 ? (props.activeTabId - 1) * 55 : 0}px
    );
`

export const DetailContainer = styled.div`

`

export const DetailHeader = styled.div`
    font-size: 22px;
`

export const DetailSubHeader = styled.div`
    font-size: 13px;
`

export const DetailDescriptions = styled.ul`
    padding: 0;
`

export const Description = styled.li`
    ${ListStyles};
`

