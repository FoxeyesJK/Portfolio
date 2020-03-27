import React from 'react'

import {
    IntroContainer,
    Header,
    SubHeader,
    Contents
} from './intro.styles'

const Intro = () => {
    return (
        <IntroContainer>
            <Header>Jake Kwon</Header>
            <SubHeader>I fking build things for the web.</SubHeader>
            <Contents>I'm a software engineer!!</Contents>
        </IntroContainer>
    )
}

export default Intro