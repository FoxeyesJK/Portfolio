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
    Description
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
                            <TabButton key={career.id} onClick={() => setActiveTabId(career.id)}>{career.company}</TabButton>
                        </TabContainer>
                    ))}
                </ListContainer>
                {
                    careers.filter(career=> career.id === activeTabId)
                                .map(career => (
                        <DetailContainer key={career.id}>
                            <DetailHeader>{career.title} @ {career.company}</DetailHeader>
                            <DetailSubHeader>{career.period}</DetailSubHeader>
                            <DetailDescriptions>
                            {career.descriptions.map(description => <Description key={description.id}>{description.content}</Description>)}
                            </DetailDescriptions>
                        </DetailContainer>
                    ))
                }
                </ContentsContainer>
            </CareerInnerContainer>
        </CareerContainer>
    )
}

export default Career