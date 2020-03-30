import React from 'react'

import {
    SiderLeftContainer,
    IconContainer,
    GithubStyledIcon,
    LinkedinStyledIcon,
    Link
} from './sider-left.styles'

const SiderLeft = () => {
    return (
        <SiderLeftContainer>
            <IconContainer>
                <Link href="https://github.com/FoxeyesJK">
                    <GithubStyledIcon />
                </Link>
            </IconContainer>
            <IconContainer>
                <Link href="https://www.linkedin.com/in/jakejkwon/">
                    <LinkedinStyledIcon />
                </Link>
            </IconContainer>
        </SiderLeftContainer>
    )
}

export default SiderLeft