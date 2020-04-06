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
        <Menu
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >About</Menu>
        <Menu
            activeClass="active"
            to="career"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Career</Menu>
        <Menu
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Project</Menu>
        <Menu
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        >Contact</Menu>
            <CustomLink isHeader>Resume</CustomLink>
        </MenuContainer>
    </HeaderContainer>
    )    
}

export default Header