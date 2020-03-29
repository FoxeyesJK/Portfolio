import React, { useEffect } from 'react'

import { GlobalStyle } from './global.styles'
import {
  AppContainer,
  BodyContainer,
  HeaderContainer,
  SiderContainer,
  SectionContainer,
  FooterContainer
} from './App.styles'

import Header from './sections/header/header.components'
import Sider from './sections/sider/sider.components'
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
      <SiderContainer><Sider /></SiderContainer>
      <SiderContainer></SiderContainer>
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
