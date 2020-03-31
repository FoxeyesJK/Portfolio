import React from 'react'

import {
    ProjectContainer,
    ProjectHeader,
    ContentsContainer,

} from './project.styles'

const Project = () => {
    return (
        <ProjectContainer>
            <ProjectHeader>Things I've Built</ProjectHeader>
            <ContentsContainer>FC Manager</ContentsContainer>
            <ContentsContainer>Shopify Renewal</ContentsContainer>
            <ContentsContainer>Portfolio</ContentsContainer>
        </ProjectContainer>
    )
}

export default Project