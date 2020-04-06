import React, { useState } from 'react'
import CAREER_DATA from './career.data'

import {
    CareerContainer,
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
    const [collections] = useState(CAREER_DATA);

    return (
        <CareerContainer>
            <CareerHeader>Where I've Worked</CareerHeader>
            <ContentsContainer>
            <ListContainer>
                <TabActiveBar activeTabId={activeTabId} />
                {collections.map(collection => (
                    <TabContainer key={collection.id}>
                        <TabButton onClick={() => setActiveTabId(collection.id)}>{collection.company}</TabButton>
                    </TabContainer>
                ))}
            </ListContainer>
            {collections.filter(collection => collection.id === activeTabId)
                            .map(collection => (
                    <DetailContainer>
                        <DetailHeader>{collection.title} @ {collection.company}</DetailHeader>
                        <DetailSubHeader>{collection.period}</DetailSubHeader>
                        <DetailDescriptions>
                        {collection.descriptions.map(description => <Description key={description.id}>{description.content}</Description>)}
                        </DetailDescriptions>
                    </DetailContainer>
                ))}
            </ContentsContainer>
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