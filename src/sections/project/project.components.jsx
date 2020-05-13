import React, { useState } from 'react'
import PROJECT_DATA from './project.data'
import imageIottie from '../../assets/project-iottie.png'
import imagePortfolio from '../../assets/project-portfolio.png'
import imageSportify from '../../assets/project-sportify.png'


import {
    ProjectContainer,
    ContentsContainer,
    DetailContainer,
    ImageContainer,
    ImageLink,
    ProjectImage,
    DetailContentsContainer,
    Type,
    Title,
    Description,
    StacksContainer,
    Stack,
    IconsContainer,
    Link,
    GithubStyledIcon
} from './project.styles'

const Project = () => {
    const [projects] = useState(PROJECT_DATA);

    const handleImage = (project) => {
        switch(project) {
        case 'iOttie':
            return imageIottie;
        case 'Sportify':
            return imageSportify;
        case 'Portfolio':
            return imagePortfolio;
          default:
            return '';
        }
      }

    return (
        <ProjectContainer>
            <ContentsContainer>
            {
                projects.map(project => 
                    <DetailContainer backgroundColor={project.backgroundColor}>
                        <ImageContainer>
                            <ImageLink href={project.link} target="_blank">
                                <ProjectImage src={handleImage(project.name)} />
                            </ImageLink>
                        </ImageContainer>
                        <DetailContentsContainer>
                            <Title>{project.name}</Title>
                            <Type>{project.title}</Type>
                            <Description>{project.description}</Description>
                            <StacksContainer>
                            {
                                project.stacks.map(stack => <Stack>{stack.name}</Stack>)
                            }
                            {
                                !!project.icons ? project.icons.map(icon => <Link href={icon.link}><GithubStyledIcon /></Link>) : ""
                            }
                            </StacksContainer>
                        </DetailContentsContainer>
                    </DetailContainer>
                    )
            }
            </ContentsContainer>
        </ProjectContainer>
    )
}

export default Project