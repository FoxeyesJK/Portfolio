import React, { useState } from 'react'
import PROJECT_DATA from './project.data'

import {
    ProjectContainer,
    ProjectHeader,
    ContentsContainer,
    DetailContainer,
    ImageContainer,
    ProjectImage,
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
            <ContentsContainer>
            {
                projects.map(project => 
                    <DetailContainer backgroundColor={project.backgroundColor}>
                        <div><ImageContainer><ProjectImage /></ImageContainer></div>
                        <DetailContentsContainer>
                            <Title>{project.name}</Title>
                            <Type>{project.title}</Type>
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