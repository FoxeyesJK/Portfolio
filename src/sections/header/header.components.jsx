import React from 'react'

import { 
    HeaderContainer,
    LogoContainer,
    MenuContainer,
    Menu
} from './header.styles'

import { ReactComponent as LogoIcon } from '../../assets/icon-logo.svg'
import CustomLink from '../../components/custom-link/custom-link.components'

const Header = ({isScrolled}) => {

    return (
    <HeaderContainer isScrolled={isScrolled}>
        <LogoContainer>
            <LogoIcon />
        </LogoContainer>
        <MenuContainer>
            <Menu href="/#about">About</Menu>
            <Menu href="/#career">Career</Menu>
            <Menu href="/#project">Project</Menu>
            <Menu href="/#contact">Contact</Menu>
            <CustomLink isHeader>Resume</CustomLink>
        </MenuContainer>
    </HeaderContainer>
    )    
}

export default Header