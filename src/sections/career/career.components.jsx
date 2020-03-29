import React from 'react'

import {
    CareerContainer,
    CareerHeader,
    ContentsContainer,
    ContentsHeader,
    ContentsSubHeader,
    ContentsBody,
    List
} from './career.styles'

const Career = () => {
    return (
        <CareerContainer>
            <CareerHeader>Where I've Worked</CareerHeader>
            <ContentsContainer>
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
            </ContentsContainer>
        </CareerContainer>
    )
}

export default Career