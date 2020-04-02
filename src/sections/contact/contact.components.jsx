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
            <ContactSubHeader>Get In Touch</ContactSubHeader>
            <ContentsContainer>I'm not looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</ContentsContainer>
        </ContactContainer>
    )
}

export default Contact