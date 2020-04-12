import React, { useState } from 'react'
import CAREER_DATA from './career.data'

import {
    CareerContainer,
    CareerInnerContainer,
    CareerHeader,
    ContentsContainer,
    ListContainer,
    TabContainer,
    TabButton,
    TabActiveBar,
    DetailContainer,
    DetailHeader,
    DetailSubHeader,
    DetailDescriptions,
    Description,
} from './career.styles'

const Career = () => {
    const [activeTabId, setActiveTabId] = useState(1);
    const [careers] = useState(CAREER_DATA);

    return (
        <CareerContainer>
            <CareerInnerContainer>
                <CareerHeader>Where I've Worked.</CareerHeader>
                <ContentsContainer>
                <ListContainer>
                    <TabActiveBar activeTabId={activeTabId} />
                    {careers.map(career => (
                        <TabContainer key={career.id}>
                            <TabButton onClick={() => setActiveTabId(career.id)}>{career.company}</TabButton>
                        </TabContainer>
                    ))}
                </ListContainer>
                {careers.filter(career=> career.id === activeTabId)
                                .map(career => (
                        <DetailContainer>
                            <DetailHeader>{career.title} @ {career.company}</DetailHeader>
                            <DetailSubHeader>{career.period}</DetailSubHeader>
                            <DetailDescriptions>
                            {career.descriptions.map(description => <Description key={description.id}>{description.content}</Description>)}
                            </DetailDescriptions>
                        </DetailContainer>
                    ))}
                </ContentsContainer>
            </CareerInnerContainer>
        </CareerContainer>
    )
}

export default Career


{/* <ContentsContainer>
<ContentsHeader>Freelance</ContentsHeader>
<ContentsSubHeader>DEC 2019 - Present </ContentsSubHeader>
<ContentsBody>
    <List>Structured a React and .Net Core based football league recording platform, currently used by over 100 club league players</List>
    <List>Designed database schemas with optimum level of normalization and relationships</List>
    <List>Optimized UI, UX, and responsive design by reflecting upon the user requirements</List>
    <List>Implemented reusable and extensible components for future front-end development</List>
</ContentsBody>
</ContentsContainer>
<ContentsContainer>
<ContentsHeader>Software Engineer</ContentsHeader>
<ContentsSubHeader>DEC 2017 - Present </ContentsSubHeader>
<ContentsBody>
    <List>Responsible for tech development and implementations of multiple E-commerce and logistics companies. Enhanced business processes by designing more efficient automation</List>
    <List>Designed and implemented in both front-end and back-end internal ERP, WMS and E-commerce website developments using javascript and ASP.NET MVC5</List>
</ContentsBody>
</ContentsContainer> */}