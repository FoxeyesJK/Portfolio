import React from 'react'

import {
    AboutContainer,
    AboutHeader,
    ContentsContainer,
    DescriptionContainer,
    Description,
    ListContainer,
    List,
    ImageContainer
} from './about.styles'

const About = () => {
    return (
        <AboutContainer>
            <AboutHeader>About Me</AboutHeader>
            <ContentsContainer>
                <DescriptionContainer>
                    <Description>Hi! I'm Jake, a software engineer</Description>
                    <Description>Graduated from Stony Brook University</Description>
                </DescriptionContainer>
                <ListContainer>
                    <List>Javascript (ES6+)</List>
                    <List>React</List>
                    <List>Redux</List>
                    <List>HTML & (S)CSS</List>
                </ListContainer>
                <ListContainer>
                    <List>C#</List>
                    <List>.NET MVC</List>
                </ListContainer>
            </ContentsContainer>
            <ImageContainer>

            </ImageContainer>
        </AboutContainer>
    )
}

export default About