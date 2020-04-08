import React, { useState } from 'react'
import PROJECT_DATA from './project.data'

import {
    ProjectContainer,
    ProjectHeader,
    ContentsContainer,

} from './project.styles'

const Project = () => {
    const [projects] = useState(PROJECT_DATA);

    return (
        <ProjectContainer>
            <ProjectHeader>Things I've Built</ProjectHeader>
            <ContentsContainer>
            {
                projects.map(project => 
                    <div>project.name</div>
                    )
            }
            </ContentsContainer>
        </ProjectContainer>
    )
}

export default Project