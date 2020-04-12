import React from 'react'

import {
    IntroContainer,
    TopContainer,
    BottomContainer,
    HeaderContainer,
    SubHeaderContainer,
    Header1,
    Header2,
    Header3,
    SubHeader1,
    SubHeader2,
    Contents,
    CustomLinkContainer
} from './intro.styles'

import CustomLink from '../../components/custom-link/custom-link.components'

const Intro = () => {
    return (
        <IntroContainer>
            <TopContainer>
                <HeaderContainer>
                    <Header1>Hello</Header1>
                    <Header2>.</Header2>
                </HeaderContainer>
                <SubHeaderContainer>
                    <SubHeader1>My name is Jake</SubHeader1>
                    <SubHeader2>I'm a software engineer in New York.</SubHeader2>
                </SubHeaderContainer>
            </TopContainer>
            <BottomContainer></BottomContainer>
        </IntroContainer>
    )
}

export default Intro