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
            <Header1>I'm Jake.</Header1>
            <Header2>a software engineer.</Header2>
        </IntroContainer>
    )
}

export default Intro