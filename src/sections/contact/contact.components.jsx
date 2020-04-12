import React from 'react'

import {
    ContactContainer,
    ContactHeader,
    ContactSubHeader,
    ContentsContainer 
} from './contact.styles'

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>What's Next?</ContactHeader>
            <ContactSubHeader>I'm currently seeking for a new opportunity.</ContactSubHeader>
            <ContentsContainer>Whether for a potential project or just fancy saying hi, then get in touch.</ContentsContainer>
        </ContactContainer>
    )
}

export default Contact