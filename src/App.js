import React, { useEffect } from 'react'

import { GlobalStyle } from './global.styles'
import {
  AppContainer,
  BodyContainer,
  HeaderContainer,
  SiderLeftContainer,
  SiderRightContainer,
  SectionContainer,
  FooterContainer
} from './App.styles'

import Header from './sections/header/header.components'
import SiderLeft from './sections/sider-left/sider-left.components'
import SiderRight from './sections/sider-right/sider-right.components'
import Intro from './sections/intro/intro.components'
import About from './sections/about/about.components'
import Career from './sections/career/career.components'
import Project from './sections/project/project.components'
import Contact from './sections/contact/contact.components'
import Footer from './sections/footer/footer.components'

// componentDidMount: function() {
//   window.addEventListener('scroll', this.handleScroll);
// },


const App = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = () => {
    console.log('scrolled')
  }

  return(
    <AppContainer>
      <GlobalStyle />
      <HeaderContainer><Header /></HeaderContainer>
      <SiderLeftContainer><SiderLeft /></SiderLeftContainer>
      <SiderRightContainer><SiderRight /></SiderRightContainer>
      <BodyContainer>
        <SectionContainer><Intro /></SectionContainer>
        <SectionContainer id="about"><About /></SectionContainer>
        <SectionContainer id="career"><Career /></SectionContainer>
        <SectionContainer id="project"><Project /></SectionContainer>
        <SectionContainer id="contact"><Contact /></SectionContainer>
      </BodyContainer>
      <FooterContainer><Footer /></FooterContainer>
    </AppContainer>
  )
}
export default App;
