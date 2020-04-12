import React from 'react'

import {
    AboutContainer,
    AboutHeader,
    ContentsContainer,
    TextContainer,
    TextInnerContainer,
    DescriptionContainer,
    Description,
    ListFullContainer,
    ListHalfContainer,
    List,
    ImageContainer,
    Image
} from './about.styles'

const About = () => {
    return (
        <AboutContainer>
            <ContentsContainer>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <TextContainer>
                <AboutHeader>Who I am.</AboutHeader>
                <TextInnerContainer>
                    <DescriptionContainer>
                        <Description>Hi! I'm Jake, a software engineer based in New York. I develop exceptional websites and web apps that provide intuitive user interfaces with efficient and modern backends.</Description>
                        <Description>I have a passion for programming and love to create web and mobile devices.</Description>
                        <Description>Here are a few technologies I've been working with recently:</Description>
                    </DescriptionContainer>
                    <ListFullContainer>
                        <ListHalfContainer>
                            <List>Javascript (ES6+)</List>
                            <List>React</List>
                            <List>Redux</List>
                            <List>HTML & (S)CSS</List>
                        </ListHalfContainer>
                        <ListHalfContainer>
                            <List>C#</List>
                            <List>.NET MVC</List>
                        </ListHalfContainer>
                    </ListFullContainer>
                </TextInnerContainer>
            </TextContainer>
            </ContentsContainer>
        </AboutContainer>
    )
}

//  <ImageContainer>
//  <Image />
//  </ImageContainer>

export default About