import React from 'react'

import {
    SiderContainer,
    IconContainer,
    GithubStyledIcon,
    LinkedinStyledIcon,
    Link
} from './sider.styles'

const Sider = () => {
    return (
        <SiderContainer>
            <IconContainer>
                <Link href="" />
                <GithubStyledIcon />
            </IconContainer>
            <IconContainer>
            <Link href="" />
                <LinkedinStyledIcon />
            </IconContainer>
        </SiderContainer>
    )
}

export default Sider