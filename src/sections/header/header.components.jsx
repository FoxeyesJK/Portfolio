import React from 'react'

import { 
    HeaderContainer,
    LogoContainer,
    StyledLogoIcon,
    MenuContainer,
    Menu
} from './header.styles'

const Header = ({isScrolled}) => {

    return (
    <HeaderContainer isScrolled={isScrolled}>
            <LogoContainer href={'/'}>
                <StyledLogoIcon />
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
            </MenuContainer>
    </HeaderContainer>
    )    
}

export default Header

//<CustomLink isHeader>Resume</CustomLink>