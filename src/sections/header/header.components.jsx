import React from 'react'

import { 
    HeaderContainer,
    LogoContainer,
    MenuContainer,
    Menu
} from './header.styles'

import { ReactComponent as LogoIcon } from '../../assets/icon-logo.svg'
import CustomLink from '../../components/custom-link/custom-link.components'

const Header = () => {

    return (
    <HeaderContainer>
        <LogoContainer>
            <LogoIcon />
        </LogoContainer>
        <MenuContainer>
            <Menu>About</Menu>
            <Menu>Career</Menu>
            <Menu>Project</Menu>
            <Menu>Contact</Menu>
            <Menu>
                <CustomLink>Resume</CustomLink>
            </Menu>
        </MenuContainer>
    </HeaderContainer>
    )    
}

export default Header