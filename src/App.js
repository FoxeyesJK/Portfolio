import React from 'react'

import { GlobalStyle } from './global.styles'
import {
  AppContainer,
  BodyContainer,
  HeaderContainer,
  SectionContainer,
  FooterContainer
} from './App.styles'

import Header from './sections/header/header.components'
import Intro from './sections/intro/intro.components'
import About from './sections/about/about.components'
import Career from './sections/career/career.components'
import Footer from './sections/footer/footer.components'


const App = () => {

  const onScroll = () => {
    console.log('hi')
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }

  return(
    <AppContainer onScroll={onScroll}>
      <GlobalStyle />
      <HeaderContainer><Header /></HeaderContainer>
      <BodyContainer>
        <SectionContainer><Intro /></SectionContainer>
        <SectionContainer><About /></SectionContainer>
        <SectionContainer><Career /></SectionContainer>
      </BodyContainer>
      <FooterContainer><Footer /></FooterContainer>
    </AppContainer>
  )
}
export default App;
