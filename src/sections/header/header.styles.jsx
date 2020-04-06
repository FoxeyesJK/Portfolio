import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll"
import { MainColor } from '../../global.styles';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 50px;
    poistion: fixed;
    box-shadow: ${props => props.isScrolled ? '0 10px 30px 10px rgba(2, 12, 27, 0.7)' : 'none'};
    background-color: ${MainColor};
`
export const LogoContainer = styled.div`
    width: 42px;
    height: 42px;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Menu = styled(Link)`
    padding: 10px;
    cursor: pointer;
`