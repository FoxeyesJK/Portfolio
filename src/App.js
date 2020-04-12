import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"
import { Element } from 'react-scroll'

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
  const [isScrolled, setIsScrolled] = useState(false);

  //componentDidMount()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  //componentWillUnmount()
  useEffect(() => {
    return () => console.log('I am unmounting');
  }, [])

  const handleScroll = () => {
    console.log('scrolled')
    const top = window.scrollY;
    console.log(top)

    if(top > 1) {
      setIsScrolled(true)
      //style change
    } else {
      setIsScrolled(false)
    }
  }

  return(
      <AppContainer>
        <GlobalStyle />
        <HeaderContainer isScrolled={isScrolled}><Header isScrolled={isScrolled} /></HeaderContainer>

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

//<SiderLeftContainer><SiderLeft /></SiderLeftContainer>
//<SiderRightContainer><SiderRight /></SiderRightContainer>