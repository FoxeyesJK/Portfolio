import React, { useState } from 'react'
import PROJECT_DATA from './project.data'

import {
    ProjectContainer,
    ProjectHeader,
    ContentsContainer,
    DetailContainer,
    ImageContainer,
    DetailContentsContainer,
    Type,
    Title,
    Description,
    StacksContainer,
    Stack,
    IconsContainer,
    Icon
} from './project.styles'

const Project = () => {
    const [projects] = useState(PROJECT_DATA);

    return (
        <ProjectContainer>
            <ProjectHeader>Things I've Built</ProjectHeader>
            <ContentsContainer>
            {
                projects.map(project => 
                    <DetailContainer>
                        <ImageContainer></ImageContainer>
                        <DetailContentsContainer>
                        <Type>{project.type}</Type>
                        <Title>{project.name}</Title>
                        <Description>{project.description}</Description>
                        <StacksContainer>
                        {
                            project.stacks.map(stack => <Stack>{stack.name}</Stack>)
                        }
                        </StacksContainer>
                        <IconsContainer>
                        {
                            project.icons.map(icon => <Icon iconType={icon.type} />)
                        }
                        </IconsContainer>
                        </DetailContentsContainer>
                    </DetailContainer>
                    )
            }
            </ContentsContainer>
        </ProjectContainer>
    )
}

export default Project