import styled from 'styled-components'
import { Link } from "react-scroll"
import { MainColor, RedColor, SubDarkerColor } from '../../global.styles';
import { ReactComponent as LogoIcon } from '../../assets/icon-boy.svg'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    poistion: fixed;
    width: 100%;
    height: 100%;
    padding: 0 300px;
    box-shadow: ${props => props.isScrolled ? '0 10px 50px 10px rgba(2, 12, 27, 0.2)' : 'none'};
    background-color: ${MainColor};

    @media screen and (max-width: 1500px) {
        padding: 0 100px;
    }

    @media screen and (max-width: 1000px) {
        padding: 0 20px;
    }
`

export const LogoContainer = styled.a`

`

export const StyledLogoIcon = styled(LogoIcon)`
    display: block;
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
    font-size: 20px;

    &:hover {
        color: ${SubDarkerColor};
        border-bottom: 3px solid ${RedColor};
        transition: 0.3s;
    }
`