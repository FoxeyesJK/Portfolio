import React from 'react'

import {
    IntroContainer,
    Header1,
    Header2,
    Header3,
    Contents,
    CustomLinkContainer
} from './intro.styles'

import CustomLink from '../../components/custom-link/custom-link.components'

const Intro = () => {
    return (
        <IntroContainer>
            <Header1>Hi, my name is</Header1>
            <Header2>Jake Kwon.</Header2>
            <Header3>I build things for the web.</Header3>
            <Contents>I'm a software engineer based in New York, NY specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</Contents>
            <CustomLinkContainer>
                <CustomLink>Get In Touch</CustomLink>
            </CustomLinkContainer>
        </IntroContainer>
    )
}

export default Intro