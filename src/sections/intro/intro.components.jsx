import React from 'react'

import {
    IntroContainer,
    TopContainer,
    BottomContainer,
    HeaderContainer,
    SubHeaderContainer,
    Header1,
    Header2,
    SubHeader1,
    SubHeader2,
} from './intro.styles'

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