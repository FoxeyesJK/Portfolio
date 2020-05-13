import React from 'react'

import {
    ContactContainer,
    ContactHeader,
    ContactSubHeader,
    ContentsContainer,
    IconsContainer,
    Link,
    GithubStyledIcon,
    LinkedinStyledIcon
} from './contact.styles'

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>What's Next?</ContactHeader>
            <ContactSubHeader>I'm currently seeking for a new opportunity.</ContactSubHeader>
            <ContentsContainer>Whether for a potential project or just fancy saying hi, then get in touch.</ContentsContainer>
            <IconsContainer>
                <Link href="https://github.com/FoxeyesJK" target="_blank">
                    <GithubStyledIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/jakejkwon/" target="_blank">
                    <LinkedinStyledIcon />
                </Link>
            </IconsContainer>
        </ContactContainer>
    )
}

export default Contact